import CustomCursor from '../CustomCursor';

export default function CustomCursorExample() {
  return (
    <div className="bg-background p-12 h-screen">
      <CustomCursor />
      <div className="space-y-8">
        <h1 className="text-4xl font-bold">Move your cursor around!</h1>
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg">
          Hover over me
        </button>
        <p className="text-lg">The cursor changes when you hover over interactive elements</p>
      </div>
    </div>
  );
}
