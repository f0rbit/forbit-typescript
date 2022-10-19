import NavBar from "src/components/NavBar";
import ContactForm from "src/components/ContactForm";
import Head from "next/head";
import { PageContainer } from "src/components/PageContainer";
import { PageLayout } from "src/components/PageLayout";
export default function Contact() {
  return (
    <PageContainer title={"Contact"}>
      <PageLayout>
        <div className="flex w-full items-center justify-center p-4">
          <div className="flex flex-col gap-4">
            <div className="rounded-md border-2 border-neutral-700 p-2">
              <h1 className="text-center text-xl font-bold text-white">
                Links
              </h1>
              <div className="flex flex-row flex-wrap items-center justify-center gap-4 p-1 ">
                <div className="rounded-md border-2 border-neutral-600 bg-neutral-700 p-1 text-center text-white">
                  <h2 className="w-[10rem] font-semibold">Twitter</h2>
                  <a
                    href="https://twitter.com/f0rbit"
                    className="text-sky-500 hover:text-sky-600"
                  >
                    @f0rbit
                  </a>
                </div>
                <div className="rounded-md border-2 border-neutral-600 bg-neutral-700 p-1 text-center text-white">
                  <h2 className="w-[10rem] font-semibold">Email</h2>
                  <a
                    href="mailto:contact@forbit.dev"
                    className="text-sky-500 hover:text-sky-600"
                  >
                    contact@forbit.dev
                  </a>
                </div>
                <div className="rounded-md border-2 border-neutral-600 bg-neutral-700 p-1 text-center text-white">
                  <h2 className="w-[10rem] font-semibold">LinkedIn</h2>
                  <a
                    href="https://www.linkedin.com/in/tom-materne-001"
                    className="text-sky-500 hover:text-sky-600"
                  >
                    Tom Materne
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-md border-2 border-neutral-700 p-2">
              <h1 className="mb-2 p-1 text-center text-xl font-bold text-white">
                Message
              </h1>
              <ContactForm />
            </div>
          </div>
        </div>
      </PageLayout>
    </PageContainer>
  );
}
