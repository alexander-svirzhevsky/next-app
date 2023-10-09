"use client";
import Button from "@/components/Button/Button";
import Heading from "@/components/Heading/Heading";
import Icon from "../public/vercel.svg";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Heading variant='h1'>Heading h1</Heading>
      <Button arrow='bottom' variant='primary'>
        Primary button
      </Button>
      <Button
        arrow='right'
        onClick={() => {
          console.log("click");
        }}
        variant='ghost'
      >
        Ghost button
      </Button>
      <Heading variant='h2'>Heading h2</Heading>
      <Heading variant='h3'>Heading h3</Heading>
      <Icon />
    </main>
  );
}
