'use server';

import { getErrorMessage, validateString } from '@/lib/utils';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';


const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: 'Email no válido'
        }
    }

    if (!validateString(message, 5000)) {
        return {
            error: 'Mensaje no válido'
        }
    }

    let data;

    try {
        data = await resend.emails.send({
            from: 'Contacto Form <onboarding@resend.dev>',
            to: 'calderonwilliam25@gmail.com',
            subject: 'Mensaje del formulario de contacto',
            reply_to: senderEmail as string,
            // text: message as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string
            }),
        });
    } catch (error: any) {
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data,
    }
};

