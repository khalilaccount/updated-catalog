"use client";
import { Container } from "@/components/shared/Container";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
    return (
        <section className="py-20 bg-zinc-50 dark:bg-zinc-950 mt-8">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT: Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Contactez-nous</h2>
                            <p className="text-muted-foreground">Nous sommes à votre disposition pour toute demande de devis ou information technique.</p>
                        </div>

                        <div className="space-y-6">
                            <ContactItem icon={MapPin} title="Adresse" text="Avenue Habib Bourguiba, Beb Bhar, Tunisie" />
                            <ContactItem icon={Phone} title="Téléphone" text="+216 71 000 000" />
                            <ContactItem icon={Mail} title="Email" text="info@gravure-moderne.com" />
                            <ContactItem icon={Clock} title="Horaires" text="Lun - Sam: 08:00 - 18:00" />
                        </div>
                    </div>

                    {/* RIGHT: Map Container */}
                    <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-zinc-200 shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.8292653079548!2d10.173146775645154!3d36.79864377224756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd350060584669%3A0x97d44fdc37a3c118!2sLa%20gravure%20moderne!5e0!3m2!1sen!2stn!4v1781199035122!5m2!1sen!2stn"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localisation de La Gravure Moderne"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}

// Helper component for clean code
function ContactItem({ icon: Icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="p-3 bg-white rounded-lg">
                <Icon className="h-6 w-6 text-[#169875]" />
            </div>
            <div>
                <h4 className="font-semibold">{title}</h4>
                <p className="text-muted-foreground">{text}</p>
            </div>
        </div>
    );
}