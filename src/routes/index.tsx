import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, CreditCard, Instagram, Mail, MapPin, Menu, MessageCircle, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import eventoLuxo from "@/assets/evento-luxo.webp.asset.json";
import makeupClassico from "@/assets/makeup-classico.webp.asset.json";
import maquiagemFesta from "@/assets/maquiagem-festa.webp.asset.json";
import noivaEditorial from "@/assets/noiva-editorial.webp.asset.json";
import processoPenteado from "@/assets/processo-penteado.webp.asset.json";
import sheilaStudio from "@/assets/sheila-studio.webp.asset.json";

const WHATSAPP_NUMBER = "5571992737788";
const WHATSAPP_MESSAGE =
  "Olá, Sheila! Vim pelo site e gostaria de consultar disponibilidade para maquiagem e penteado. Gostaria de saber mais sobre o atendimento.";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const instagramUrl = "https://www.instagram.com/sheilaluzmakeup/";
const email = "studioluzempreendimentos@gmail.com";

const images = [
  { src: noivaEditorial.url, alt: "Noiva com vestido branco em produção editorial", label: "Noivas" },
  { src: maquiagemFesta.url, alt: "Maquiagem sofisticada para evento", label: "Eventos" },
  { src: makeupClassico.url, alt: "Maquiagem clássica com acabamento luminoso", label: "Maquiagem" },
  { src: processoPenteado.url, alt: "Detalhe do processo profissional de maquiagem", label: "Bastidores" },
  { src: eventoLuxo.url, alt: "Produção elegante para evento de luxo", label: "Editorial" },
  { src: sheilaStudio.url, alt: "Sheila Luz em seu espaço de produção", label: "Sheila Luz" },
];

const services = [
  { number: "01", title: "Noivas", text: "Maquiagem personalizada para valorizar sua beleza no grande dia.", image: noivaEditorial.url },
  { number: "02", title: "Madrinhas", text: "Produção elegante e harmoniosa para celebrar um momento especial.", image: maquiagemFesta.url },
  { number: "03", title: "Formandas", text: "Maquiagem sofisticada e duradoura para uma noite inesquecível.", image: makeupClassico.url },
  { number: "04", title: "Carnaval", text: "Beleza criativa, marcante e pensada para acompanhar toda a celebração.", image: eventoLuxo.url },
];

const steps = [
  ["01", "Conversa", "Entendemos seu estilo, ocasião e expectativas."],
  ["02", "Planejamento", "Definimos a produção ideal para o seu momento."],
  ["03", "Produção", "Maquiagem e penteado executados com cuidado e precisão."],
  ["04", "Seu momento", "Você aproveita o resultado e vive seu momento com confiança."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sheila Luz Makeup | Maquiagem e Penteado para Noivas e Eventos" },
      { name: "description", content: "Maquiagem e penteado para noivas e eventos em São Paulo e Salvador. Produções sofisticadas, leves e personalizadas para momentos especiais." },
      { property: "og:title", content: "Sheila Luz Makeup | Noivas e Eventos" },
      { property: "og:description", content: "Produções sofisticadas, leves e personalizadas para noivas e eventos em São Paulo e Salvador." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function CtaLink({ children, secondary = false, className = "" }: { children: React.ReactNode; secondary?: boolean; className?: string }) {
  return (
    <Button asChild variant={secondary ? "outline" : "default"} className={`h-12 rounded-none px-6 text-[11px] font-semibold uppercase tracking-[0.16em] ${secondary ? "border-current bg-transparent shadow-none" : "shadow-none"} ${className}`}>
      <a href={secondary ? "#portfolio" : whatsappUrl} target={secondary ? undefined : "_blank"} rel={secondary ? undefined : "noreferrer"}>{children}</a>
    </Button>
  );
}

function SectionTitle({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent"><span className="h-px w-8 bg-accent" />{eyebrow}</p>
      <h2 className="font-display text-4xl leading-[1.08] text-balance md:text-6xl">{children}</h2>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = lightbox === null ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-ivory/20 bg-ink/90 text-ivory backdrop-blur-md">
        <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 md:px-10 lg:grid-cols-[auto_1fr_auto]">
          <a href="#inicio" aria-label="Sheila Luz Makeup — início" className="min-w-0 font-display text-lg tracking-[0.12em] md:text-xl">SHEILA LUZ <span className="font-sans text-[8px] tracking-[0.28em] text-champagne">MAKEUP</span></a>
          <nav className="hidden justify-center gap-8 lg:flex" aria-label="Navegação principal">
            {[['Início','inicio'],['Sobre','sobre'],['Noivas','noivas'],['Serviços','servicos'],['Portfólio','portfolio'],['Agendamento','agendamento'],['Contato','contato']].map(([label,id]) => <a key={id} href={`#${id}`} className="text-[10px] uppercase tracking-[0.16em] text-ivory/70 transition-colors hover:text-ivory">{label}</a>)}
          </nav>
          <Button asChild className="hidden h-10 rounded-none border border-champagne bg-transparent px-6 text-[10px] uppercase tracking-[0.18em] text-ivory shadow-none hover:bg-champagne hover:text-ink lg:inline-flex"><a href={whatsappUrl} target="_blank" rel="noreferrer">Agendar</a></Button>
          <Button variant="ghost" size="icon" className="text-ivory hover:bg-ivory/10 hover:text-ivory lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="border-t border-ivory/10 bg-ink px-6 py-7 lg:hidden" aria-label="Menu móvel">{[['Início','inicio'],['Sobre','sobre'],['Noivas','noivas'],['Serviços','servicos'],['Portfólio','portfolio'],['Agendamento','agendamento'],['Contato','contato']].map(([label,id]) => <a key={id} href={`#${id}`} onClick={closeMenu} className="block border-b border-ivory/10 py-4 font-display text-2xl text-ivory">{label}</a>)}</nav>}
      </header>

      <section id="inicio" className="relative min-h-[92svh] bg-ink text-ivory">
        <img src={makeupClassico.url} alt="Produção de beleza sofisticada por Sheila Luz Makeup" className="absolute inset-0 h-full w-full object-cover object-[50%_28%] opacity-65 md:object-[center_32%]" fetchPriority="high" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-[1440px] items-end px-5 pb-16 pt-32 md:items-center md:px-10 md:pb-0">
          <div className="max-w-3xl animate-fade-in">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-champagne">Beauty artist · São Paulo & Salvador</p>
            <h1 className="font-display text-[clamp(3.2rem,8vw,7.8rem)] leading-[0.9] text-balance">Beleza que realça<br/><em className="font-light">a sua melhor versão.</em></h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-ivory/80 md:text-base">Maquiagem e penteado para noivas e eventos, com uma produção sofisticada, leve e pensada para você.</p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.26em] text-champagne">São Paulo <span className="px-2">•</span> Salvador</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><CtaLink>Quero agendar minha produção</CtaLink><CtaLink secondary>Conhecer o trabalho</CtaLink></div>
          </div>
          <a href="#sobre" aria-label="Continuar navegando" className="absolute bottom-5 right-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-ivory/70 md:bottom-10 md:right-10"><span>Descubra</span><ArrowDown className="h-4 w-4 animate-bounce" /></a>
        </div>
      </section>

      <section id="sobre" className="section-spacing bg-warm">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-5 md:px-10 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:gap-24">
          <div className="relative mx-auto w-full max-w-xl"><img src={sheilaStudio.url} alt="Sheila Luz, maquiadora e hair stylist" loading="lazy" className="aspect-[4/5] w-full object-cover object-top"/><div className="absolute -bottom-5 -right-5 hidden border border-accent bg-warm px-7 py-5 md:block"><p className="font-display text-2xl">Sheila Luz</p><p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Makeup & Hair Artist</p></div></div>
           <div><SectionTitle eyebrow="A experiência">Mais do que maquiagem.<br/><em>Uma experiência para você se sentir inesquecível.</em></SectionTitle><div className="mt-8 space-y-5 text-sm leading-7 text-muted-foreground md:text-base"><p>Sou maquiadora há 10 anos. Desde muito nova, sempre gostei de me maquiar. Anos depois, uma amiga me convidou para fazermos juntas um curso de design de sobrancelhas e maquiagem — e foi ali que essa história profissional começou.</p><p>Hoje, cada produção é pensada para valorizar a beleza de cada mulher, respeitar sua personalidade e criar um resultado elegante, sofisticado e atemporal.</p><p>Da escolha dos detalhes ao acabamento final, cada etapa é feita para que você se sinta segura, confiante e ainda mais especial.</p></div><div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-border pt-7 text-[10px] uppercase tracking-[0.14em] md:grid-cols-4">{["10 anos de experiência","Atendimento a domicílio","Noivas & eventos","São Paulo + Salvador"].map(item => <span key={item}>{item}</span>)}</div></div>
        </div>
      </section>

      <section id="noivas" className="relative bg-ink py-20 text-ivory md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="relative"><img src={noivaEditorial.url} alt="Noiva em produção editorial elegante" loading="lazy" className="h-[68svh] max-h-[820px] min-h-[520px] w-full object-cover object-top"/><span className="absolute left-4 top-4 border border-ivory/50 px-3 py-2 text-[9px] uppercase tracking-[0.22em]">Bridal experience</span><img src={maquiagemFesta.url} alt="Detalhe de maquiagem para casamento" loading="lazy" className="absolute -bottom-8 right-4 hidden aspect-[3/4] w-1/4 border-8 border-ink object-cover md:block"/></div>
          <div className="lg:pl-8"><p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-champagne">Para noivas</p><h2 className="font-display text-5xl leading-[1.02] md:text-7xl">O seu grande dia merece uma beleza <em>inesquecível.</em></h2><p className="mt-7 max-w-xl text-sm leading-7 text-ivory/70 md:text-base">Cada noiva tem uma história, um estilo e uma beleza única. A produção é criada para harmonizar maquiagem, penteado, vestido e personalidade, resultando em uma imagem elegante e autêntica.</p><CtaLink className="mt-8 bg-champagne text-ink hover:bg-ivory">Quero ser uma noiva Sheila Luz</CtaLink></div>
        </div>
      </section>

      <section id="servicos" className="section-spacing bg-background">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10"><SectionTitle eyebrow="Serviços">Produções para momentos que merecem ser lembrados.</SectionTitle><div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">{services.map((service) => <article key={service.number} className="group bg-background"><div className="overflow-hidden"><img src={service.image} alt={service.title} loading="lazy" className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"/></div><div className="min-h-56 p-6"><span className="text-[10px] tracking-[0.2em] text-accent">{service.number}</span><h3 className="mt-5 font-display text-3xl">{service.title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{service.text}</p></div></article>)}</div></div>
      </section>

      <section id="portfolio" className="section-spacing bg-warm">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10"><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><SectionTitle eyebrow="Portfólio">Belezas que falam por si.</SectionTitle><Button asChild variant="link" className="w-fit rounded-none p-0 text-[10px] uppercase tracking-[0.2em] text-foreground"><a href={instagramUrl} target="_blank" rel="noreferrer">Ver mais no Instagram <ArrowRight /></a></Button></div>
          <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-2 md:auto-rows-[300px] md:grid-cols-4">{images.map((image,index) => <button key={image.src} onClick={() => setLightbox(index)} className={`group relative overflow-hidden text-left ${index === 0 ? "col-span-2 row-span-2" : index === 3 ? "row-span-2" : ""}`} aria-label={`Ampliar: ${image.label}`}><img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"/><span className="absolute inset-x-0 bottom-0 bg-image-caption px-4 py-5 text-[9px] uppercase tracking-[0.22em] text-ivory opacity-0 transition-opacity group-hover:opacity-100">{image.label}</span></button>)}</div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10"><SectionTitle eyebrow="O cuidado">Cada detalhe pensado para você.</SectionTitle><div className="mt-14 grid border-y border-border md:grid-cols-2 lg:grid-cols-4">{steps.map(([number,title,text], index) => <article key={number} className={`min-h-64 py-8 md:p-8 ${index > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}><span className="font-display text-7xl text-accent/40">{number}</span><h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.18em]">{title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div>
      </section>

      <section className="section-spacing bg-ink text-ivory">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10"><SectionTitle eyebrow="Depoimentos">Experiências que ficam na memória.</SectionTitle><div className="mt-12 grid gap-px bg-ivory/15 md:grid-cols-3">{[1,2,3].map((item) => <article key={item} className="min-h-72 bg-ink p-7 md:p-9"><span className="font-display text-5xl text-champagne">“</span><p className="mt-5 text-sm leading-7 text-ivory/60">Espaço reservado para inserir o depoimento real de uma cliente.</p><div className="mt-10 border-t border-ivory/15 pt-5"><p className="text-xs uppercase tracking-[0.15em]">Nome da cliente</p><p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-champagne">Ocasião</p></div></article>)}</div></div>
      </section>

      <section className="border-b border-border bg-background py-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-5 md:grid-cols-[1fr_auto] md:items-end md:px-10"><div><p className="text-[10px] uppercase tracking-[0.24em] text-accent">Onde atendemos</p><h2 className="mt-4 font-display text-5xl md:text-7xl">São Paulo <em>+</em> Salvador</h2><p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-accent" /> Atendimento a domicílio em SP e SSA.</p></div><CtaLink>Consultar minha data</CtaLink></div>
      </section>

      <section id="agendamento" className="section-spacing bg-warm">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-5 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div><SectionTitle eyebrow="Agendamento">Como reservar a sua data.</SectionTitle><p className="mt-7 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">Entre em contato pelo WhatsApp, conte a data e o tipo de produção desejada. Após a confirmação da disponibilidade, a reserva é feita com 30% do valor total.</p><CtaLink className="mt-8">Solicitar um orçamento</CtaLink></div>
          <div className="border-y border-border">
            <details className="group border-b border-border py-7" open><summary className="cursor-pointer list-none font-display text-2xl">Como faço para agendar?</summary><p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">Solicite sua data pelo WhatsApp. Para confirmar a reserva, será necessário o pagamento de 30% do valor total.</p></details>
            <details className="group border-b border-border py-7"><summary className="cursor-pointer list-none font-display text-2xl">Qual é a política de reserva?</summary><p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">Em caso de desistência da cliente, os 30% pagos para a reserva serão retidos como multa contratual e não serão reembolsados. Se houver um imprevisto por parte da profissional, o valor será reembolsado com aviso de até 24 horas de antecedência.</p></details>
            <details className="group py-7"><summary className="cursor-pointer list-none font-display text-2xl">Quais são as formas de pagamento?</summary><p className="mt-4 flex items-center gap-2 text-sm leading-7 text-muted-foreground"><CreditCard className="h-4 w-4 text-accent" /> Pix ou cartão. A chave Pix é informada no atendimento.</p></details>
          </div>
        </div>
      </section>

      <section id="contato" className="relative min-h-[80svh] bg-ink text-ivory">
        <img src={eventoLuxo.url} alt="Produção sofisticada para uma ocasião especial" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top opacity-55"/><div className="absolute inset-0 bg-final-overlay"/><div className="relative mx-auto flex min-h-[80svh] max-w-[1280px] items-center px-5 py-24 md:px-10"><div className="max-w-2xl"><p className="text-[10px] uppercase tracking-[0.28em] text-champagne">Sua data, sua beleza</p><h2 className="mt-5 font-display text-5xl leading-none md:text-8xl">Vamos criar a sua produção <em>perfeita?</em></h2><p className="mt-7 max-w-lg text-sm leading-7 text-ivory/80">Conte um pouco sobre o seu evento e consulte disponibilidade para sua data.</p><CtaLink className="mt-8 bg-champagne text-ink hover:bg-ivory">Solicitar orçamento pelo WhatsApp</CtaLink><p className="mt-4 text-[10px] tracking-[0.1em] text-ivory/60">Respondo sua solicitação e verificamos a disponibilidade da data.</p></div></div>
      </section>

      <footer className="bg-warm px-5 py-16 md:px-10"><div className="mx-auto grid max-w-[1280px] gap-10 text-center md:grid-cols-3 md:text-left"><div><p className="font-display text-2xl tracking-[0.1em]">SHEILA LUZ</p><p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Makeup & Hair Artist</p><p className="mt-5 text-xs leading-6 text-muted-foreground">Atendimento a domicílio<br/>São Paulo e Salvador</p></div><div><p className="font-display text-2xl">Fale com Sheila</p><a href={`mailto:${email}`} className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"><Mail className="h-4 w-4" /> {email}</a><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground md:justify-start"><MessageCircle className="h-4 w-4" /> (71) 99273-7788</a></div><div><p className="font-display text-2xl">Mais inspirações no Instagram</p><a href={instagramUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs uppercase tracking-[0.15em] text-muted-foreground">@sheilaluzmakeup</a><Button asChild variant="outline" className="mx-auto mt-5 flex h-11 w-fit rounded-none border-foreground bg-transparent px-5 text-[10px] uppercase tracking-[0.16em] md:mx-0"><a href={instagramUrl} target="_blank" rel="noreferrer"><Instagram /> Seguir no Instagram</a></Button></div></div><div className="mx-auto mt-12 max-w-[1280px] border-t border-border pt-6 text-center text-[9px] uppercase tracking-[0.16em] text-muted-foreground md:text-left">© {new Date().getFullYear()} Sheila Luz Makeup</div></footer>

      <Button asChild size="icon" className="fixed bottom-5 right-5 z-30 h-14 w-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-float hover:bg-whatsapp/90" aria-label="Falar com Sheila pelo WhatsApp"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle className="h-6 w-6" /></a></Button>

      {lightbox !== null && <div className="fixed inset-0 z-50 grid place-items-center bg-ink/95 p-4" role="dialog" aria-modal="true" aria-label="Visualizador do portfólio"><Button variant="ghost" size="icon" className="absolute right-4 top-4 text-ivory hover:bg-ivory/10 hover:text-ivory" onClick={() => setLightbox(null)} aria-label="Fechar imagem"><X className="h-6 w-6" /></Button><img src={images[lightbox]?.src} alt={images[lightbox]?.alt ?? "Trabalho de Sheila Luz"} className="max-h-[88svh] max-w-full object-contain"/><p className="absolute bottom-5 text-[10px] uppercase tracking-[0.22em] text-ivory/70">{images[lightbox]?.label}</p></div>}
    </main>
  );
}