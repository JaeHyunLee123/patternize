"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";

//Modal for parrellel routing
const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-zinc-900/20 z-10">
      <div className="container flex items-center h-full mx-w-lg mx-auto">
        <div className="relative bg-background w-full h-fit py-20 px-2 rounded-lg">
          <div className="absolute top-4 right-4">
            <Button
              onClick={() => router.back()}
              aria-label="close modal"
              variant={"secondary"}
              className="h-6 w-6 p-0 rounded-md"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
