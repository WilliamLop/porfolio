import React from 'react';

import{
    Html, Body, Head, Heading, Hr, Container,  Preview, Section, Text
} from '@react-email/components';

import {Tailwind} from '@react-email/tailwind';

type ContactFormEmailProps = {
    message : string;
    senderEmail: string;
}

const ContactFormEmail = ({ message, senderEmail } : ContactFormEmailProps) => {
    return (
        <div>
            <Html>
                <Head />
                <Preview>Nuevo mensaje en el sitio web de tu portafolio</Preview>
                <Tailwind>
                    <Body className='bg-gray-100 text-black'>
                        <Container>
                            <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md shadow-md'>
                                <Heading className='leading-tight'>
                                    Ha recibido el siguiente mensaje del formulario de contacto
                                </Heading>
                                <Text>{message}</Text>
                                <Hr />
                                <Text>El correo electrónico del remitente es: {senderEmail}</Text>
                            </Section>
                        </Container>
                    </Body>
                </Tailwind>
            </Html>
        </div>
    )
}

export default ContactFormEmail