import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Play, Code2, Sparkles, Copy, ExternalLink } from "lucide-react";
import React, { useState } from "react";

export default function CodePlaygroundSection() {
  const [activeDemo, setActiveDemo] = useState("array-filter");

  const codeDemos = [
    {
      id: "array-filter",
      title: "Array Filter & Map",
      description: "Dynamic data filtering and transformation",
      language: "JavaScript",
      code: `const users = [
  { name: "John", age: 25, role: "developer" },
  { name: "Jane", age: 30, role: "designer" },
  { name: "Bob", age: 22, role: "developer" },
  { name: "Alice", age: 28, role: "manager" }
];

// Filter developers and format names
const developers = users
  .filter(user => user.role === "developer")
  .map(user => \`\${user.name} (\${user.age})\`);

console.log(developers);
// Output: ["John (25)", "Bob (22)"]`,
      output: ["John (25)", "Bob (22)"],
      interactive: true
    },
    {
      id: "react-component",
      title: "React Component",
      description: "Interactive counter with hooks",
      language: "React",
      code: `import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(true);

  useEffect(() => {
    setIsEven(count % 2 === 0);
  }, [count]);

  return (
    <div className="p-4 border rounded">
      <h3>Count: {count}</h3>
      <p>Number is: {isEven ? 'Even' : 'Odd'}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
      output: "Interactive component running below",
      interactive: true
    },
    {
      id: "async-fetch",
      title: "Async Data Fetching",
      description: "Modern async/await pattern",
      language: "JavaScript",
      code: `async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const userData = await response.json();
    
    return {
      success: true,
      data: userData,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
}

// Usage
fetchUserData(123).then(result => {
  console.log(result);
});`,
      output: "Simulated API response structure",
      interactive: false
    },
    {
      id: "algorithm",
      title: "Sorting Algorithm",
      description: "Quick sort implementation",
      language: "JavaScript",
      code: `function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [
    ...quickSort(left),
    ...middle,
    ...quickSort(right)
  ];
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
const sorted = quickSort(numbers);

console.log('Original:', numbers);
console.log('Sorted:', sorted);`,
      output: {
        original: [64, 34, 25, 12, 22, 11, 90],
        sorted: [11, 12, 22, 25, 34, 64, 90]
      },
      interactive: true
    }
  ];

  // Interactive Counter Component
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(true);

  // Update isEven when count changes
  React.useEffect(() => {
    setIsEven(count % 2 === 0);
  }, [count]);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const runCode = (demoId: string) => {
    // Simulate running code
    console.log(`Running ${demoId} demo...`);
  };

  return (
    <section id="playground" className="min-h-screen py-20 bg-gradient-to-br from-muted/5 via-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Code Playground
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive code examples showcasing my problem-solving approach and technical skills
          </p>
        </div>

        {/* Demo Selection */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {codeDemos.map((demo, index) => (
            <Button
              key={demo.id}
              variant={activeDemo === demo.id ? "default" : "outline"}
              className="h-auto p-4 flex flex-col items-start hover-scale"
              onClick={() => setActiveDemo(demo.id)}
            >
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="h-4 w-4" />
                <Badge variant="secondary" className="text-xs">
                  {demo.language}
                </Badge>
              </div>
              <h3 className="font-semibold text-sm text-left">{demo.title}</h3>
              <p className="text-xs text-muted-foreground text-left">{demo.description}</p>
            </Button>
          ))}
        </div>

        {/* Code Display */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Code Editor */}
          <Card className="hover-scale">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  {codeDemos.find(d => d.id === activeDemo)?.title}
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(codeDemos.find(d => d.id === activeDemo)?.code || "")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => runCode(activeDemo)}
                    disabled={!codeDemos.find(d => d.id === activeDemo)?.interactive}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Run
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="whitespace-pre-wrap">
                  {codeDemos.find(d => d.id === activeDemo)?.code}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Output/Result */}
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Live Output
              </CardTitle>
            </CardHeader>
            <CardContent>
              {activeDemo === "array-filter" && (
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Filtered Developers:</h4>
                    <div className="space-y-1">
                      {(codeDemos.find(d => d.id === activeDemo)?.output as string[])?.map((dev, index) => (
                        <div key={index} className="text-sm text-primary">{dev}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeDemo === "react-component" && (
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4 border">
                    <h4 className="font-semibold mb-4">Interactive Counter:</h4>
                    <div className="space-y-3">
                      <div className="text-xl font-bold">Count: {count}</div>
                      <div className="text-sm text-muted-foreground">
                        Number is: <span className={isEven ? "text-green-600" : "text-blue-600"}>
                          {isEven ? "Even" : "Odd"}
                        </span>
                      </div>
                      <Button 
                        size="sm" 
                        onClick={() => setCount(count + 1)}
                        className="hover-scale"
                      >
                        Increment
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {activeDemo === "algorithm" && (
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Quick Sort Result:</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Original: </span>
                        <span className="font-mono">[64, 34, 25, 12, 22, 11, 90]</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Sorted: </span>
                        <span className="font-mono text-green-600">[11, 12, 22, 25, 34, 64, 90]</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeDemo === "async-fetch" && (
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">API Response Structure:</h4>
                    <pre className="text-sm text-muted-foreground">
{`{
  "success": true,
  "data": {
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "timestamp": "2024-01-15T10:30:00Z"
}`}
                    </pre>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Skills Showcase */}
        <div className="mt-16">
          <Card className="hover-scale">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These are just a few examples of my coding approach. I love solving complex problems 
                with clean, efficient code. Check out my GitHub for more projects and contributions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    View GitHub Profile
                  </a>
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop, behavior: 'smooth' })}>
                  <Code2 className="h-5 w-5 mr-2" />
                  Discuss a Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}