import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion';
import React from 'react';

interface Props {
  title: string;
  content: string | React.ReactNode;
}

export default function InformationItem({ title, content }: Props) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <span>{title}</span>
        </AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
