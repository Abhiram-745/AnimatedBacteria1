import SectionHeader from '../SectionHeader';
import { Microscope } from 'lucide-react';

export default function SectionHeaderExample() {
  return (
    <div className="bg-background p-12">
      <SectionHeader 
        number="Section 1"
        title="What is Salmonella?"
        subtitle="Understanding the bacterium that causes food poisoning"
        icon={Microscope}
      />
    </div>
  );
}
