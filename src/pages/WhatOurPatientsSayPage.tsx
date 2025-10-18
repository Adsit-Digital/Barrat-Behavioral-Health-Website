import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { useState } from "react";

export function WhatOurPatientsSayPage() {
  const reviews = [
    {
      name: "Monetha W.",
      timestamp: "1 week ago",
      text: "I have to give Dr. Kadija 5 stars. She has changed my life. She is thorough and truly cares about her patients which is refreshing. You can tell she has worked hard and ensures her work is meaningful. Be upfront, honest, and purposeful and … More"
    },
    {
      name: "Erin G.",
      timestamp: "1 week ago",
      text: "Kadija is amazing. She has changed my life. Thank you Kadija!!"
    },
    {
      name: "Kenadi P.",
      timestamp: "2 months ago",
      text: "Kadija is nothing less than incredible. My experience with her has been life-changing and I voiced that to her multiple times. From the very first session, I felt truly heard and supported in a safe, non-judgmental space. Her compassion, insight, and ability to gently challenge me helped me grow in ways I never imagined possible. I am so grateful for the tools and perspective I've gained through our work together, and I would wholeheartedly recommend her to anyone seeking guidance, healing, and growth."
    },
    {
      name: "David G.",
      timestamp: "2 months ago",
      text: "I can't say enough great things about Dr. Kadija Conteh-Barrat! She has been truly life-changing in helping me manage my adult ADHD. From the very first appointment, she took the time to really listen, understand my challenges, and explain my treatment options in a way that made me feel comfortable and informed. Her compassionate, patient-centered approach makes me feel supported and understood every step of the way. She's responsive, thorough, and genuinely invested in my well-being. I'm so grateful for her expertise and the positive impact she's had on my life. Highly recommend to anyone seeking exceptional care for ADHD."
    },
    {
      name: "Naya C.",
      timestamp: "2 months ago",
      text: "Kadija is one of the best providers I've worked with. Her holistic, biopsychosocial approach and collaborative style make a real difference, especially when managing complex health needs. She is highly accessible, responsive between sessions, and always open to adjusting treatment based on what is or isn't working. Kadija takes the time to build realistic, step-by-step plans that can adjust as your needs and circumstances change, and she is not afraid to advocate on your behalf when insurance or other providers become difficult. Scheduling is simple, and I highly recommend her to anyone seeking thoughtful, thorough, and effective care."
    },
    {
      name: "Kasey S.",
      timestamp: "2 months ago",
      text: "Excellent service! For the past 2 years Dr. Barrat has always been accommodating and easy to talk to."
    },
    {
      name: "Sarah H.",
      timestamp: "2 months ago",
      text: "Amazing! Kadija is the absolute best provider! She ACTUALLY listens, takes the time to get to know her patients and doesn't just throw unnecessary medications at you. Their office staff is so kind and they are very responsive. Hands down, the best!"
    },
    {
      name: "Stephanie H.",
      timestamp: "2 months ago",
      text: "Kadija is amazing. She really takes the time to get to know you and your symptoms to determine what would work best for you. And she doesn't just throw pharmaceuticals at the problem, unless truly needed."
    },
    {
      name: "Megan G.",
      timestamp: "2 months ago",
      text: "Dr. Barrat truly changed my life! I was referred to her by my PCP when I was struggling with mental health. She was/is so genuine, you can truly tell that you are in a partnership. She respects your opinions, needs, and struggles and really seeks to understand. She is incredibly dependable and always makes time for her patients—even after hours and when she is on vacation. After two years working together, my mental health is very well managed and that is a major credit to Dr. Barrat's expertise and genuine care."
    },
    {
      name: "M. Hasty",
      timestamp: "2 months ago",
      text: "Dr. Kadija is an AMAZING doctor! I'm so thankful I found her earlier this year. She is great at listening and taking time to understand. I've never felt rushed and feel good knowing any questions or concerns I have will be addressed."
    },
    {
      name: "Laurie M.",
      timestamp: "2 months ago",
      text: "I have been seeing Kadija for several months. She has been an amazing help to my therapy and link with my therapist. She is very kind, knowledgeable, professional, and caring. She has worked with me step by step to achieve a plan that we both agreed upon. I would highly recommend her."
    },
    {
      name: "Michael C.",
      timestamp: "2 months ago",
      text: "I came to Kadija during one of the darkest chapters of my life. I was unstable, drowning in guilt, and couldn't recognize the person I had become. The pain I carried had twisted me into someone I didn't even like—someone I barely recognized. I had already done damage I couldn't undo. People walked away. Trust was broken. And for a while, I thought I deserved to stay stuck in that place.\n\nBut Kadija didn't treat me like I was beyond repair. She helped me confront the pain instead of avoiding it. She listened without judgment, challenged me to take accountability, and reminded me, week after week, that healing is messy but possible. Her guidance gave me the tools to rebuild. I still struggle with shame. I still wrestle with the past. But the difference now is that I don't let those feelings define me. I've grown more than I ever thought I could, and I have the courage to keep moving forward, even when I'm hurting.\n\nThanks to her, I'm no longer just surviving. I'm learning how to live. And that's the kind of revenge no pain or regret can take from me. If you're lost, if you're ashamed, if you're convinced you're too far gone, please go to Kadija. It can change everything."
    },
    {
      name: "Tricia H.",
      timestamp: "2 months ago",
      text: "Kadija has been wonderful! I was very hesitant to seek help from a therapist when I was going through a very stressful time with my health. It took me a while to agree to see a therapist and consider medication to help me. I know that if it was not for Kadija and her support, I would not have recovered so quickly. I cannot thank you enough."
    },
    {
      name: "Chibentuli F.",
      timestamp: "2 months ago",
      text: "I've been working with Kadija to manage my ADHD and mood disorder, and the experience has been truly life-changing. She is incredibly patient, knowledgeable, and supportive. Kadija takes the time to really listen and understand, offering insights and strategies that have helped me gain more control and clarity in my daily life. I've never felt rushed or judged—just genuinely supported. If you're looking for a psychiatrist who is both compassionate and effective, I highly recommend her."
    },
    {
      name: "Mayealie A.",
      timestamp: "2 months ago",
      text: "Highly recommend. With great expertise and care, Kadija was always responsive and went the extra mile in providing the support and guidance I needed during a very difficult time."
    },
    {
      name: "Asher Z.",
      timestamp: "2 months ago",
      text: "I've had a number of psychiatrists over the years, but none have matched the level of care and professionalism I've experienced here. Kadija is truly the best psychiatrist I've had. Not only is she a great listener, but she also takes the time to check in regularly and ask thoughtful, meaningful questions that show she genuinely cares about my well-being.\n\nOne moment that really stood out to me was when I received a notice from the DMV and felt overwhelmed. She responded quickly and helped me navigate the situation. Her responsiveness and attention to detail made a big difference during a stressful time.\n\nIf you're looking for someone who's compassionate, reliable, and truly invested in your mental health, I can't recommend her enough."
    },
    {
      name: "Thanh Hien P.",
      timestamp: "2 months ago",
      text: "Kadija is extremely capable, thoughtful, and empathetic. I'm very glad I found her and have been working with her for almost a year now!"
    },
    {
      name: "Isaac M.",
      timestamp: "2 months ago",
      text: "Kadija is very thorough and helpful. I really appreciate her and the support she has provided me."
    },
    {
      name: "Elly R.",
      timestamp: "2 months ago",
      text: "Kadija is incredibly kind and knowledgeable. I always felt informed and supported when making changes to my treatment plan. I especially appreciated how she checked in between appointments, which made a big difference. I highly recommend her to anyone looking for thoughtful, attentive psychiatric care."
    },
    {
      name: "Brittany W.",
      timestamp: "2 months ago",
      text: "I've been working with Kadija for years now and I have never felt so seen and supported from a provider. She truly cares about you, not as a patient but as a person, and works to provide holistic outlooks and remedies to empower you to handle life's challenges and recognize the wins. I would recommend her in a heartbeat to any and everyone on their mental health journey."
    },
    {
      name: "Mehret L.",
      timestamp: "2 months ago",
      text: "Kadija is so kind and welcoming she made me feel so comfortable and was very easy to talk to and would take her time with me if I had any questions. She has such nice energy and light; I look forward to our meetings. Would 10/10 recommend!"
    },
    {
      name: "Landon M.",
      timestamp: "2 months ago",
      text: "Highly recommend! Wonderful experience all around."
    },
    {
      name: "Andrew R.",
      timestamp: "2 months ago",
      text: "Beyond grateful for Kadija. After various mediocre experiences with other clinicians throughout the years, finding someone who cares, checks in, and goes above and beyond is nearly unheard of nowadays. I can truly say Kadija is far and away the best provider I've had the privilege of being a patient of. Her approach is exactly what you hope to find in a clinician—medication management + smart solution-focused conversation. She truly listens and urges you to ask her questions, discuss any concerns, all while being very receptive to make appropriate adjustments. She is great about explaining the 'why' and what is going on in the brain. I could go on and on with how wonderful she is. She has great energy and makes it easy to open up. Current patient for almost a year here."
    },
    {
      name: "Rebecca C.",
      timestamp: "2 months ago",
      text: "I was very pleased with my care from Dr. Barrat. We worked together over a period of at least 6 months to achieve the goals in my care together. She is very well versed in both pharmacological as well as non-pharmaceutical avenues to treat mental health conditions. Virtual appointments, easy scheduling, and quick, easy ways to contact directly if questions arise between appointments. Never had any complaints. Would definitely recommend to anyone needing a new practitioner."
    },
    {
      name: "Ashley M.",
      timestamp: "2 months ago",
      text: "I have been seeing Nurse Practitioner Kadija for over a year now, and I am so grateful for her care. I've felt so supported and heard through the process. She genuinely cares and always makes time. She has cheered me on as I navigated through different phases of life. Couldn't recommend her services more!"
    },
    {
      name: "Lindsay R.",
      timestamp: "2 months ago",
      text: "Super grateful to have found Dr. Kadija! I highly recommend her services to anyone seeking psych health support or medication management, as well as as a general practitioner. She is very attentive and considerate about your experiences and works to ensure that all your stresses and concerns are addressed. I really appreciate that she trusts her patients in their understanding of their own health and well-being and wants to help you meet your wellness goals. I have spent years changing around providers and finally feel progress and control. She is very communicative and always available for scheduling when needed. She is also helpful with case management with insurance/pharmacies. Plus, she is very sweet, friendly, and funny, all while managing her growing clinic! Highly recommend! :)"
    },
    {
      name: "Samantha O.",
      timestamp: "2 months ago",
      text: "I've been seeing NP Kadija for over a year now for medication management, and from the very beginning, it was clear how deeply she cares about her patients and their well-being. She is truly a gift to her profession and has played a significant role in improving my life through her thoughtful and effective management of my OCD. I always feel heard and supported in our appointments. Her staff are incredibly polite and make scheduling easy and stress-free. I cannot recommend her enough."
    },
    {
      name: "Eleana F.",
      timestamp: "2 months ago",
      text: "Dr. Kadija is truly an amazing and caring psychiatrist. From the very first appointment, she made me feel heard, supported, and understood. She takes the time to listen without judgment and genuinely cares about her patients' well-being. Her compassionate approach, combined with her deep knowledge and professionalism, has made a huge difference in my journey. I always leave our sessions feeling more hopeful and empowered. I'm incredibly grateful to have found her and highly recommend her to anyone seeking thoughtful and effective mental health care."
    },
    {
      name: "Maya P.",
      timestamp: "2 months ago",
      text: "Kadija is exceptional. She genuinely has her client's best interest at heart and it's never difficult to make an appointment with her. She will always do her best to make herself available. I am forever grateful for how Kadija has supported me and changed my life for the better."
    },
    {
      name: "Talesa R.",
      timestamp: "2 months ago",
      text: "Kadijah is just amazing. Would you like someone who actually has the patience and insight to listen to you? Please reach out to her! She takes a holistic approach while also valuing the importance of psychiatric care. She takes a deep understanding and learning about you, your past, and your current state before slapping any medication at you. I would 100% recommend this office and this provider, this is truly my first time being able to say that."
    },
    {
      name: "Lynn E.",
      timestamp: "2 months ago",
      text: "My experience has been wonderful. Conversations are comfortable and productive. I have been connecting with Kadijah for a year and it has been a thoroughly positive relationship."
    },
    {
      name: "Flower E.",
      timestamp: "2 months ago",
      text: "The nurse practitioner is very kind and helpful, taking everything I tell her into account when we have our appointments, helping me progress in treatment."
    },
    {
      name: "Arabella A.",
      timestamp: "2 months ago",
      text: "I've worked with many therapists over the years, but it wasn't until I met Dr. Kadija that I truly felt heard, understood, and supported. While my previous therapists were kind and helpful, our work remained limited to talk therapy. Dr. K, on the other hand, brought a depth of knowledge, patience, and relatability that made all the difference. She gently helped me overcome my fear of medication and guided me through a process of healing I never thought possible.\n\nAfter six months of working with her—through medication management and supportive therapy—I began to feel like myself again. For the first time in years, I wasn't just surviving; I was living. I found myself breathing easier and finding joy in the small things, something I hadn't experienced in a long time due to ongoing trauma.\n\nWithout family nearby, I often felt alone—but with Dr. K, I felt like I finally had a support system. She is incredibly compassionate and thoughtful, and I can't put into words how grateful I am for the care she's given me. She has played such a pivotal role in my healing, and I truly can't thank her enough."
    },
    {
      name: "Absalat H.",
      timestamp: "2 months ago",
      text: "Working with Kadija Conteh-Barrat, DNP, FNP-BC, PMHNP-BC has been a rewarding experience. She cares and actually listens. And she makes sure you are doing okay even if you don't have an appointment scheduled. She has helped me a lot."
    },
    {
      name: "Lauren P.",
      timestamp: "2 months ago",
      text: "Dr. Kadija Conteh-Barrat is incredibly kind and truly listens. Her support and guidance have made such a positive difference in my life. Highly recommend her to anyone looking for compassionate, effective care!"
    },
    {
      name: "Froggy",
      timestamp: "2 months ago",
      text: "The perfect psychiatrist. Very kind, understanding, and professional. I would highly recommend Barrat Behavioral Health to anyone, but especially to people looking for a kind and culturally competent psychiatrist!!"
    },
    {
      name: "Jessica A.",
      timestamp: "2 months ago",
      text: "We are incredibly grateful for the care and support Kadija has provided our daughter. From the very first appointment, it was clear that Kadija truly listens and takes the time to understand not just the symptoms, but the whole person. She created a safe, respectful, and nonjudgmental space where our daughter felt heard and valued."
    },
    {
      name: "James M.",
      timestamp: "2 months ago",
      text: "Kadisha is a wonderful therapist. She has a terrific bedside manner that allows for successful communication and development of a top-notch care plan. Very available at all hours."
    },
    {
      name: "Elizabeth D.",
      timestamp: "6 months ago",
      text: "Amazing team, professional, knowledgeable, and talented! Recommend this office to all!!"
    }
  ];

  const [visibleRows, setVisibleRows] = useState(4);
  const reviewsPerRow = 3;
  const totalReviews = reviews.length;
  const maxVisibleReviews = visibleRows * reviewsPerRow;
  const hasMoreReviews = maxVisibleReviews < totalReviews;

  const handleShowMore = () => {
    setVisibleRows(prev => prev + 2);
  };

  const visibleReviews = reviews.slice(0, maxVisibleReviews);

  return (
    <div className="bg-white">
      <SEO
        title="What Our Patients Say"
        description="Read authentic 5-star reviews from our patients about their experiences with Dr. Kadija Conteh-Barrat and Barrat Behavioral Health & Primary Care."
      />
      
      {/* Hero Section */}
      <section className="relative bg-light-gray overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/media/supporting%20pages%20background.webm" type="video/webm" />
        </video>
        
        {/* Content */}
        <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
            What Our Patients Say
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Real stories from real patients who have experienced life-changing care with Dr. Kadija Conteh-Barrat.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleReviews.map((review, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-brand-orange text-lg">⭐️⭐️⭐️⭐️⭐️</div>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.timestamp}</p>
                </div>
                <div className="text-gray-700 leading-relaxed">
                  {review.text.split('\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className={pIndex > 0 ? 'mt-4' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {hasMoreReviews && (
            <div className="text-center mt-12">
              <Button 
                onClick={handleShowMore}
                size="lg" 
                className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg px-8 py-4 text-base transition-transform hover:scale-105"
              >
                Show More
              </Button>
            </div>
          )}


        </div>
      </section>
    </div>
  );
}