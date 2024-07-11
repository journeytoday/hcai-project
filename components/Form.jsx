'use client';


import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {sendEmail} from "@/actions/sendEmail"
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';


const Form = () => {
  return (
    <form className='flex flex-col gap-y-4'
    action={async (formData) =>{
      await sendEmail(formData);
    }}>
      
      
      {/* input */}
      <div className='relative flex items-center'>
        <Input type='email' id='email' name = 'senderEmail'required maxLength={500} placeholder='Email' />
        <MailIcon className='absolute right-6' size={20} />
      </div>
      {/* textarea */}
      <div className='relative flex items-center'>
        <Textarea placeholder='Type Your Message Here.' name = 'message' required maxLength={500} />
        <MessageSquare className='absolute top-4 right-6' size={20} />
      </div>
      <Button 
      type = "submit" 
      className='flex items-center gap-x-1 max-w-[166px]'>
         Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;





