import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-center mb-4">Welcome to Your New App</h1>
        <p className="text-center mb-6">
          This is a bare-bones application. Start building your amazing app here!
        </p>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Click the button below to begin exploring the components and features available to you.
            </p>
            <div className="flex justify-center">
              <Button variant="primary">Explore Components</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default Index;