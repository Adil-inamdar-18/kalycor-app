import { Suspense } from "react";

import { Footer, Header } from "@/components/landing";
import SubmitResumeForm from "@/components/opportunities/pages/SubmitResumeForm";

export default function SubmitResumePage() {
  return (
    <main>
      <Header />
      <Suspense fallback={null}>
        <SubmitResumeForm />
      </Suspense>
      <Footer />
    </main>
  );
}
