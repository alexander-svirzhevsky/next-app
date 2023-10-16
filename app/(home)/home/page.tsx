"use client";
import Heading from "@/components/Heading/Heading";

export default function Home() {
  return (
    <main className='flex flex-col justify-between min-h-screen'>
      <div className='flex gap-8'>
        <Heading className='' variant='h1'>
          Side bar
        </Heading>
        <div className='grow'>Content</div>
      </div>
      <div className='bg-violet-600'>Footer</div>
    </main>
  );
}
