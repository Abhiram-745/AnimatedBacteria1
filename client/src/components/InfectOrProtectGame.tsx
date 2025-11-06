import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Trophy, RotateCcw } from 'lucide-react';

interface Scenario {
  id: number;
  question: string;
  options: { text: string; correct: boolean; feedback: string }[];
}

const scenarios: Scenario[] = [
  {
    id: 1,
    question: "You're cooking raw chicken - what do you do first?",
    options: [
      { text: 'Wash hands', correct: true, feedback: 'Correct! Always wash hands before handling food.' },
      { text: 'Cut vegetables', correct: false, feedback: 'Wrong! This could cross-contaminate the vegetables.' },
      { text: 'Taste sauce', correct: false, feedback: 'Wrong! Never taste before washing hands after touching raw meat.' },
    ],
  },
  {
    id: 2,
    question: 'Chicken looks cooked outside, but not sure inside - what next?',
    options: [
      { text: 'Check with thermometer', correct: true, feedback: 'Correct! Use a thermometer to ensure it reaches 75°C.' },
      { text: 'Serve now', correct: false, feedback: 'Wrong! Undercooked chicken can contain harmful bacteria.' },
      { text: 'Microwave quickly', correct: false, feedback: 'Wrong! Microwaving unevenly could leave bacteria alive.' },
    ],
  },
  {
    id: 3,
    question: 'You have leftovers - what do you do?',
    options: [
      { text: 'Put in fridge', correct: true, feedback: 'Correct! Refrigerate within 2 hours to prevent bacteria growth.' },
      { text: 'Leave out', correct: false, feedback: 'Wrong! Bacteria multiply rapidly at room temperature.' },
      { text: 'Reuse same plate', correct: false, feedback: 'Wrong! This can reintroduce bacteria to the cooked food.' },
    ],
  },
];

export default function InfectOrProtectGame() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [gameComplete, setGameComplete] = useState(false);

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(index);
    const isCorrect = scenarios[currentScenario].options[index].correct;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentScenario < scenarios.length - 1) {
        setCurrentScenario(currentScenario + 1);
        setSelectedOption(null);
      } else {
        setGameComplete(true);
      }
    }, 2000);
  };

  const resetGame = () => {
    setCurrentScenario(0);
    setScore(0);
    setSelectedOption(null);
    setGameComplete(false);
  };

  if (gameComplete) {
    const passed = score >= 2;
    return (
      <Card className="max-w-2xl mx-auto p-12 glass-card text-center space-y-8 animate-scale-in" data-testid="game-results">
        <div className={`p-6 rounded-full ${passed ? 'bg-primary/20' : 'bg-destructive/20'} w-32 h-32 mx-auto flex items-center justify-center`}>
          {passed ? (
            <Trophy className="w-20 h-20 text-primary text-glow animate-pulse" />
          ) : (
            <XCircle className="w-20 h-20 text-destructive text-glow" />
          )}
        </div>
        <div className="space-y-4">
          <h3 className={`text-5xl font-black ${passed ? 'text-primary gradient-text' : 'text-destructive'} text-glow`}>
            {passed ? 'Outbreak Stopped!' : 'Bacteria Won This Round!'}
          </h3>
          <p className="text-2xl">
            You scored <span className="font-bold text-primary text-glow">{score}</span> out of {scenarios.length}
          </p>
          <p className="text-lg text-muted-foreground">
            {passed 
              ? 'Great job! You know how to prevent Salmonella infections.'
              : 'Review the prevention guidelines and try again!'}
          </p>
        </div>
        <Button 
          onClick={resetGame}
          size="lg"
          data-testid="button-restart-game"
          className="text-lg px-8"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Play Again
        </Button>
      </Card>
    );
  }

  const scenario = scenarios[currentScenario];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <Badge variant="outline" className="text-primary border-primary text-lg px-4 py-2">
          Scenario {currentScenario + 1} of {scenarios.length}
        </Badge>
        <Badge variant="outline" className="text-secondary border-secondary text-lg px-4 py-2" data-testid="game-score">
          Score: {score}
        </Badge>
      </div>

      <Card className="p-8 glass-card" data-testid={`scenario-${scenario.id}`}>
        <h3 className="text-3xl font-bold mb-8 text-center text-primary text-glow">
          {scenario.question}
        </h3>

        <div className="space-y-4">
          {scenario.options.map((option, index) => {
            const isSelected = selectedOption === index;
            const showFeedback = selectedOption !== null;
            const isCorrect = option.correct;

            return (
              <button
                key={index}
                data-testid={`option-${index}`}
                onClick={() => handleOptionClick(index)}
                disabled={selectedOption !== null}
                className={`w-full p-6 rounded-lg border-2 text-left transition-all hover-elevate active-elevate-2 ${
                  isSelected && isCorrect
                    ? 'border-primary bg-primary/10'
                    : isSelected && !isCorrect
                    ? 'border-destructive bg-destructive/10'
                    : 'border-border glass-card'
                } ${selectedOption !== null && !isSelected ? 'opacity-50' : ''}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg font-medium">{option.text}</span>
                  {showFeedback && isSelected && (
                    isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-primary animate-scale-in" />
                    ) : (
                      <XCircle className="w-6 h-6 text-destructive animate-scale-in" />
                    )
                  )}
                </div>
                {showFeedback && isSelected && (
                  <p className={`mt-3 text-sm ${isCorrect ? 'text-primary' : 'text-destructive'}`}>
                    {option.feedback}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
