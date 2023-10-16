"use client";
import Badge from "@/components/Badge/Badge";
import Button from "@/components/Button/Button";
import Heading from "@/components/Heading/Heading";
import Paragraph from "@/components/Paragraph/Paragraph";
import Rating from "@/components/Rating/Rating";
import { useState } from "react";

export default function Home() {
  const [rating, setRating] = useState(4);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
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
      <Heading variant='h1'>Heading h1</Heading>
      <Heading variant='h2'>Heading h2</Heading>
      <Heading variant='h3'>Heading h3</Heading>
      <Paragraph variant='s'>Size S</Paragraph>
      <Paragraph variant='m'>Size M</Paragraph>
      <Paragraph variant='l'>Size L</Paragraph>
      <Badge type='green'>Badge</Badge>
      <Badge type='gray'>Badge</Badge>
      <Badge type='red'>Badge</Badge>
      <Badge type='ghost'>Badge</Badge>
      <Rating isEditable={false} rating={4} />
      <Rating isEditable={true} setRating={setRating} rating={rating} />
    </main>
  );
}
