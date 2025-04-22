
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function JOMmeResumeSite() {
  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-10">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">JOMme Resume Services</h1>
        <p className="text-lg text-gray-300">Resumes that work as hard as you do.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white text-black">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">What I Offer</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>ATS-optimized resumes</li>
              <li>Modern, clean resume designs (PDF + editable)</li>
              <li>Tailored content for any industry</li>
              <li>Cover letters and LinkedIn profile help</li>
              <li>Fast delivery & unlimited edits</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white text-black">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Why Choose JOMme?</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Real experience, not copy-paste templates</li>
              <li>Personalized approach—your story matters</li>
              <li>Clean and professional look</li>
              <li>100% satisfaction guaranteed</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Ready to Upgrade Your Resume?</h2>
        <p className="text-gray-400">Click below to order through Fiverr or message me for a custom quote.</p>
        <Button className="bg-white text-black px-6 py-2 rounded-full text-lg font-medium">
          Order Now on Fiverr
        </Button>
      </section>

      <footer className="text-center text-gray-500 text-sm pt-10">
        &copy; {new Date().getFullYear()} JOMme Resume Services. Built by Jomith.
      </footer>
    </div>
  );
}
