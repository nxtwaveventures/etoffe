export default function FAQPage() {
  const faqs = [
    {
      category: 'Understanding Sarees',
      questions: [
        {
          q: 'What is a saree?',
          a: 'A saree is a 5-6 meter unstitched fabric that drapes around the body. It\'s one of the oldest surviving garments in human history — worn for over 5,000 years across the Indian subcontinent. No buttons, no zippers. Just fabric and artistry.'
        },
        {
          q: 'Why is the saree considered a fashion icon?',
          a: 'Because it\'s timeless, adaptable, and deeply personal. A saree can be elegant at a wedding, professional at work, or avant-garde on a runway. Designers like Sabyasachi and Tarun Tahiliani have brought sarees to global fashion weeks. It\'s not "ethnic wear" — it\'s fashion with 5,000 years of evolution.'
        },
        {
          q: 'Can I experience different cultural styles?',
          a: 'Absolutely! Sarees vary dramatically by region. Bengali sarees have red borders and are worn with keys tucked in the waist. Gujarati drapes have the pallu in front. South Indian Kanjivaram sarees are heavy silk. We help you understand the cultural context of each style so you wear it with respect and knowledge.'
        },
        {
          q: 'I\'m not Indian. Can I still wear a saree?',
          a: 'Yes, with respect and understanding. We encourage global appreciation, not appropriation. We educate you on the saree\'s cultural significance, help you choose appropriate occasions, and guide you on respectful styling. Many of our clients are from Japan, Germany, and the USA.'
        }
      ]
    },
    {
      category: 'Ordering & Timeline',
      questions: [
        {
          q: 'How does the ordering process work?',
          a: 'Fill our Google Form with your preferences. We reply within 2-3 days via WhatsApp or email. We curate 3 saree options for you, discuss your choice, then coordinate with weavers. The entire journey takes 2-3 months from form submission to delivery.'
        },
        {
          q: 'How long does weaving take?',
          a: '2-3 months on average. Banarasi zari sarees can take 3-4 months. Simpler cotton sarees might be ready in 6-8 weeks. Handloom weaving can\'t be rushed — each thread is placed by human hands.'
        },
        {
          q: 'Can I track progress?',
          a: 'Yes. We send photos every 2-3 weeks — the loom setup, the motifs forming, the border work, and final inspection. You\'ll see your saree being born.'
        },
        {
          q: 'Do you have ready-made sarees?',
          a: 'No. We only do custom weaving. This ensures authenticity and allows you to be part of the creation process.'
        }
      ]
    },
    {
      category: 'Pricing & Investment',
      questions: [
        {
          q: 'How much does a saree cost?',
          a: 'It varies widely depending on silk type (mulberry, tussar, eri), zari work (real gold/silver thread), motif complexity, and weaving time. A simple cotton saree costs much less than a heavy Banarasi with buttidar patterns. We give exact pricing after understanding your preferences.'
        },
        {
          q: 'Why so expensive?',
          a: 'Because it\'s handmade by a master weaver over 2-3 months. Each thread is placed individually. Real zari uses gold and silver. The weaver\'s skill is generational — passed down through families. You\'re not buying fabric. You\'re buying art, heritage, and someone\'s life work.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'PayPal for international transactions. We split payment: 50% upfront (to start weaving), 50% before shipping (after quality inspection).'
        },
        {
          q: 'Are there customs fees?',
          a: 'Possibly, depending on your country. We handle all export paperwork from India, but import taxes are your responsibility. Check your country\'s customs rules for textiles. Most countries have duty-free limits for personal garments.'
        }
      ]
    },
    {
      category: 'Health & Safety',
      questions: [
        {
          q: 'Can silk cause allergies?',
          a: 'Silk allergies are extremely rare, but they exist. If you have sensitive skin or known textile allergies, consult a dermatologist before ordering. We\'ve never had an allergic reaction case in our history, but we mention this for transparency. Natural silk is generally hypoallergenic.'
        },
        {
          q: 'What about the weight? Can I wear a heavy saree?',
          a: 'Silk sarees (especially Banarasi with heavy zari) can weigh 1-2 kg. If you have back issues or mobility concerns, consider lighter cotton or tussar silk. We can recommend fabrics based on your comfort needs.'
        },
        {
          q: 'Is the dye safe?',
          a: 'We prioritize natural dyes (indigo, turmeric, madder root) when possible. Some vibrant colors require chemical dyes, which are textile-grade and safe. If you have extreme chemical sensitivities, let us know — we\'ll work with weavers who specialize in natural dyes only.'
        }
      ]
    },
    {
      category: 'Wearing & Practical Concerns',
      questions: [
        {
          q: 'I\'ve never worn a saree. Is it hard?',
          a: 'It takes practice — like tying a tie or wearing heels for the first time. We provide video guides and can do a virtual draping lesson via video call. The first few times will feel awkward. By the 5th time, it becomes second nature.'
        },
        {
          q: 'What if I\'m plus-size or very tall/short?',
          a: 'Sarees are wonderfully inclusive. They\'re one-size-fits-all because you drape them to your body. Taller people might need a longer pallu fall. Shorter people might create more pleats. Plus-size? The fabric wraps elegantly. We guide you on draping techniques for your body type.'
        },
        {
          q: 'Can I wear a saree in the West without looking out of place?',
          a: 'Absolutely. Sarees are globally recognized as elegant formal wear. Wear them to weddings, galas, art openings, or fancy dinners. Pair with simple jewelry and confident draping. We have clients wearing sarees in Berlin, Tokyo, and New York regularly.'
        },
        {
          q: 'How do I care for it?',
          a: 'Silk sarees with zari: Dry clean only. Air out after wearing. Store flat or rolled in cotton cloth (never plastic — silk needs to breathe). Avoid direct perfume spray. Refold along different lines every few months to prevent permanent creases.'
        }
      ]
    },
    {
      category: 'Authenticity & Transparency',
      questions: [
        {
          q: 'How do I know it\'s authentic?',
          a: 'We provide: (1) Weaver\'s name and loom location, (2) Silk burn test results (real silk smells like burnt hair, fake smells like plastic), (3) Zari authenticity (real gold/silver thread vs. metallic coating), (4) Progress photos from the loom. You\'ll know exactly who made your saree and where.'
        },
        {
          q: 'Are weavers paid fairly?',
          a: 'Yes. We work directly with master weavers. No middlemen. They set their rates based on skill, time, and material cost. They\'re credited by name (if they consent). Fair trade isn\'t a buzzword for us — it\'s the entire business model.'
        },
        {
          q: 'What if something goes wrong with my order?',
          a: 'We\'ve never had a defective saree, but if there\'s a weaving error, wrong specifications, or damage during shipping, we remake it at no cost. Since sarees are custom-made, we don\'t do refunds — but we guarantee you get what you ordered.'
        },
        {
          q: 'Why should I trust you?',
          a: 'Fair question. We\'re transparent about timelines (2-3 months, not 2 weeks). We show real weaving photos. We don\'t hide behind stock images. We admit when we don\'t know something. And we don\'t pressure you to buy. If you\'re not ready, we\'re not offended.'
        },
        {
          q: 'Do you support weaver communities beyond sales?',
          a: 'We\'re working on it. Currently exploring: design innovation workshops, financial literacy programs, and loom maintenance funds. This is a long-term commitment, not a marketing gimmick.'
        }
      ]
    },
    {
      category: 'Shipping & Delivery',
      questions: [
        {
          q: 'Do you ship worldwide?',
          a: 'Yes. We ship to USA, Canada, UK, Europe, Australia, Japan, UAE, and most countries. Shipping takes 1-2 weeks via tracked courier (DHL/FedEx).'
        },
        {
          q: 'What if the saree is damaged in shipping?',
          a: 'We package sarees in acid-free tissue, rigid boxes, and waterproof outer layers. If damage occurs, we file an insurance claim and remake the saree immediately.'
        },
        {
          q: 'Can I pick up in person in India?',
          a: 'Yes, if you\'re in Varanasi or nearby. We can arrange a handover and even a weaver visit (with advance notice). Email us to coordinate.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal mb-6 text-center">
            Frequently Asked <span className="text-deep-burgundy">Questions</span>
          </h1>
          <p className="text-xl text-soft-gray text-center mb-16">
            Everything you need to know about custom saree weaving, ordering, and care.
          </p>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-2xl font-heading font-bold text-deep-burgundy mb-6">
                  {section.category}
                </h2>
                <div className="space-y-6">
                  {section.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="card">
                      <h3 className="text-lg font-heading font-semibold text-charcoal mb-3">
                        {faq.q}
                      </h3>
                      <p className="text-soft-gray leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-20 text-center card">
            <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
              Still have questions?
            </h2>
            <p className="text-soft-gray mb-6">
              We\'re happy to answer anything — from silk thread counts to Nakshatra color alignments.
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
