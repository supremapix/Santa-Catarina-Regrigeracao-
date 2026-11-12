import React from 'react';
import { COMPANY_INFO } from '../data/company';
export function LocalContactCard({ locality }: { locality: string }) {
  return <section className="local-contact" aria-label={`Atendimento em ${locality}`}>
    <div className="local-contact-visual"><img src={COMPANY_INFO.assets.logo} alt="Santa Catarina Refrigeração" width="160" height="142" loading="lazy" /><strong>Conserto de geladeira</strong><span>{locality}</span><a href={`tel:${COMPANY_INFO.phoneClean}`}>{COMPANY_INFO.phone}</a></div>
    <div><h2>Converse sobre o atendimento em {locality}</h2><p>Informe a marca, o modelo, o sintoma e o bairro do equipamento. A equipe confirma disponibilidade, avaliação e condições do serviço antes do agendamento.</p><a className="local-contact-cta" href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">Consultar atendimento pelo WhatsApp</a></div>
  </section>;
}
