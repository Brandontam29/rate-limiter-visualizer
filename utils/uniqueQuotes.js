const QUOTES = [
    { quote: "Life is a journey; embrace the detours.", author: "" },
    {
        quote: "The beauty of being human lies in our imperfections.",
        author: "",
    },
    { quote: "To do good is to enrich your own soul.", author: "" },
    {
        quote: "Success is not the destination, but the pursuit of a meaningful goal.",
        author: "",
    },
    {
        quote: "Hard work is the fertilizer that nourishes the seeds of success.",
        author: "",
    },
    {
        quote: "Self-confidence is the key that unlocks your true potential.",
        author: "",
    },
    {
        quote: "In the end, it's not the years in your life that count, but the life in your years.",
        author: "Abraham Lincoln",
    },
    {
        quote: "The purpose of life is not to be happy, but to matter, to be productive, to be useful, to have it make some difference that you lived at all.",
        author: "Leo Rosten",
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll",
    },
    {
        quote: "Being human means having the power to change your life.",
        author: "",
    },
    {
        quote: "The best way to predict your future is to create it.",
        author: "Peter Drucker",
    },
    {
        quote: "The joy of life comes from our encounters with new experiences.",
        author: "Paulo Coelho",
    },
    {
        quote: "Goodness is the only investment that never fails.",
        author: "Henry David Thoreau",
    },
    {
        quote: "Success is not about the destination, but about the journey and the person you become along the way.",
        author: "",
    },
    {
        quote: "Hard work beats talent when talent doesn't work hard.",
        author: "Tim Notke",
    },
    {
        quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        author: "Christian D. Larson",
    },
    {
        quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
        author: "",
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer",
    },
    {
        quote: "The harder I work, the luckier I get.",
        author: "Samuel Goldwyn",
    },
    {
        quote: "Believe you can, and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Life is a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
    },
    {
        quote: "The best way to find yourself is to lose yourself in the service of others.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Success is not in what you have, but who you are.",
        author: "",
    },
    {
        quote: "The road to success is always under construction.",
        author: "",
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "Life isn't about finding yourself. It's about creating yourself.",
        author: "George Bernard Shaw",
    },
    {
        quote: "The purpose of our existence is not just to survive but to thrive.",
        author: "David Attenborough",
    },
    {
        quote: "Do all the good you can, by all the means you can, in all the ways you can, in all the places you can, at all the times you can, to all the people you can, as long as ever you can.",
        author: "John Wesley",
    },
    {
        quote: "Success is not the absence of failure; it's the persistence through failure.",
        author: "Aisha Tyler",
    },
    {
        quote: "The purpose of our lives is to give birth to the best which is within us.",
        author: "Marianne Williamson",
    },
    {
        quote: "Life is short, and it's up to you to make it sweet.",
        author: "Sarah Louise Delany",
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "The biggest adventure you can take is to live the life of your dreams.",
        author: "Oprah Winfrey",
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "Success is not about how much money you make; it's about the difference you make in people's lives.",
        author: "Michelle Obama",
    },
    {
        quote: "Life is either a daring adventure or nothing.",
        author: "Helen Keller",
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius",
    },
    {
        quote: "Self-confidence is the belief in your own worth, abilities, and potential.",
        author: "",
    },
    {
        quote: "Children are the seeds of the future, and we must nurture and protect them.",
        author: "",
    },
    {
        quote: "Teenagers possess the power to shape the world and create a better tomorrow.",
        author: "",
    },
    {
        quote: "Family is the compass that guides us, supports us, and gives us a sense of belonging.",
        author: "",
    },
    {
        quote: "Learning is the key to unlocking the doors of opportunity and personal growth.",
        author: "",
    },
    {
        quote: "Empathy is the bridge that connects us, fostering understanding and compassion.",
        author: "",
    },
    {
        quote: "Psychology is the lens through which we understand the complexities of the human mind.",
        author: "",
    },
    {
        quote: "Mental health is as important as physical health and deserves our attention and care.",
        author: "",
    },
    {
        quote: "Friendship is a precious gift that brings joy, support, and shared experiences.",
        author: "",
    },
    {
        quote: "A strong relationship is built on trust, respect, and the willingness to grow together.",
        author: "",
    },
    {
        quote: "Gratitude is the doorway to abundance, joy, and a fulfilled heart.",
        author: "",
    },
    {
        quote: "Thankfulness is the attitude that transforms ordinary moments into extraordinary blessings.",
        author: "",
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker",
    },
    {
        quote: "A person who never made a mistake never tried anything new.",
        author: "Albert Einstein",
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
    },
    {
        quote: "The only person you should try to be better than is the person you were yesterday.",
        author: "Anonymous",
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer",
    },
    {
        quote: "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
        author: "Mark Zuckerberg",
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis",
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon",
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra",
    },
    {
        quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        author: "Jordan Belfort",
    },
    {
        quote: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates",
    },
    {
        quote: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
    },
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs",
    },
    {
        quote: "Do not wait for leaders; do it alone, person to person.",
        author: "Mother Teresa",
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
        author: "Mark Twain",
    },
    {
        quote: "The future starts today, not tomorrow.",
        author: "Pope John Paul II",
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison",
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb",
    },
    {
        quote: "If you really look closely, most overnight successes took a long time.",
        author: "Steve Jobs",
    },
    {
        quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
        author: "Jimmy Dean",
    },
    {
        quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
        author: "David Brinkley",
    },
    {
        quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "Motivation is the fuel that propels us forward in pursuit of our dreams.",
        author: "",
    },
    {
        quote: "Life is not about waiting for the storm to pass, but about learning to dance in the rain.",
        author: "Vivian Greene",
    },
    {
        quote: "Success is not defined by external achievements, but by inner fulfillment and happiness.",
        author: "",
    },
    {
        quote: "Hard work is the key that unlocks the door to success and personal growth.",
        author: "",
    },
    {
        quote: "Believe in yourself, for you are capable of far more than you imagine.",
        author: "",
    },
    {
        quote: "Teenagers have the power to shape the world and make a lasting impact.",
        author: "",
    },
    {
        quote: "The elderly are the bearers of wisdom and the living treasures of our society.",
        author: "",
    },
    {
        quote: "Family is where love begins, grows, and lasts forever.",
        author: "",
    },
    {
        quote: "Learning is the key to growth, development, and personal fulfillment.",
        author: "",
    },
    {
        quote: "Empathy is the ability to understand and share the feelings of others.",
        author: "",
    },
    {
        quote: "Psychology helps us unravel the complexities of the human mind and behavior.",
        author: "",
    },
    {
        quote: "Mental health is an essential part of overall well-being and deserves attention and care.",
        author: "",
    },
    {
        quote: "Friendship is a treasure that brings joy, laughter, and support to our lives.",
        author: "",
    },
    {
        quote: "Life is a journey of self-discovery, where we learn, grow, and evolve.",
        author: "",
    },
    {
        quote: "Being human means embracing our flaws, celebrating our strengths, and striving for growth.",
        author: "",
    },
    {
        quote: "Doing good is not just a choice; it's a responsibility we have towards humanity.",
        author: "",
    },
    {
        quote: "Success is not a destination; it's a continuous pursuit fueled by passion and perseverance.",
        author: "",
    },
    {
        quote: "Hard work is the cornerstone of achievement and the path to reaching our goals.",
        author: "",
    },
    {
        quote: "Self-confidence is the belief that we have the power to overcome challenges and achieve greatness.",
        author: "",
    },
    {
        quote: "Children are the promise of a better tomorrow, and it's our duty to nurture their potential.",
        author: "",
    },
    {
        quote: "Teenagers are the voices of change, challenging the status quo and shaping the future.",
        author: "",
    },
    {
        quote: "The elderly are the reservoirs of wisdom, and we can learn invaluable lessons from their experiences.",
        author: "",
    },
    {
        quote: "Family is the foundation of love, support, and unconditional acceptance.",
        author: "",
    },
    {
        quote: "Learning is a lifelong pursuit that broadens our horizons and opens doors of opportunity.",
        author: "",
    },
    {
        quote: "Empathy is the ability to walk in someone else's shoes and understand their unique journey.",
        author: "",
    },
    {
        quote: "Psychology delves into the complexities of the human mind, unraveling its mysteries.",
        author: "",
    },
    {
        quote: "Mental health is essential for overall well-being, and seeking help is a sign of strength.",
        author: "",
    },
    {
        quote: "Friendship is a bond that weaves hearts together, providing support and companionship.",
        author: "",
    },
    {
        quote: "Relationships thrive on communication, trust, and mutual respect.",
        author: "",
    },
    {
        quote: "Thankfulness is a practice that cultivates joy, contentment, and a grateful heart.",
        author: "",
    },
    {
        quote: "Gratefulness is the recognition of the abundance in our lives and the appreciation for it.",
        author: "",
    },
    {
        quote: "Motivation is the driving force that propels us forward when faced with challenges.",
        author: "",
    },
    {
        quote: "The key to success is not avoiding failure but having the courage to rise each time we fall.",
        author: "",
    },
    {
        quote: "Cherish every moment, for life's beauty lies in the simplest of things.",
        author: "",
    },
    {
        quote: "To truly understand others, we must first seek to understand ourselves.",
        author: "",
    },
    {
        quote: "Happiness is not a destination; it's a state of mind cultivated through gratitude and positivity.",
        author: "",
    },
    {
        quote: "Believe in yourself, for you possess the power to turn dreams into reality.",
        author: "",
    },
    {
        quote: "Every setback is an opportunity for a comeback; never lose hope.",
        author: "",
    },
    {
        quote: "In the face of adversity, resilience becomes our greatest strength.",
        author: "",
    },
    {
        quote: "The path to success is paved with determination, perseverance, and a positive mindset.",
        author: "",
    },
    {
        quote: "Change starts from within; be the change you wish to see in the world.",
        author: "",
    },
    {
        quote: "Kindness is a language that transcends barriers and spreads love wherever it goes.",
        author: "",
    },
    {
        quote: "The key to happiness lies in finding purpose and meaning in what we do.",
        author: "",
    },
    {
        quote: "Dream big, work hard, and never let anyone tell you it's not possible.",
        author: "",
    },
    {
        quote: "Life is a precious gift, and every day is an opportunity for growth and self-improvement.",
        author: "",
    },
    {
        quote: "Success is not about wealth or fame but about the positive impact we have on others.",
        author: "",
    },
    {
        quote: "Hard work is the foundation upon which dreams are built.",
        author: "",
    },
    {
        quote: "Self-confidence is the key that unlocks our full potential and allows us to shine.",
        author: "",
    },
    {
        quote: "Children are the hope of the future, and investing in their education is investing in a better world.",
        author: "",
    },
    {
        quote: "Teenagers are the dreamers and doers who will shape the world with their passion and determination.",
        author: "",
    },
    {
        quote: "The elderly are the living libraries, preserving the knowledge and wisdom of generations past.",
        author: "",
    },
    {
        quote: "Learning is the fuel that ignites personal growth and opens doors to endless possibilities.",
        author: "",
    },
    {
        quote: "Empathy is the bridge that connects hearts and fosters compassion and understanding.",
        author: "",
    },
    {
        quote: "Psychology is the science that unravels the mysteries of the human mind and behavior.",
        author: "",
    },
    {
        quote: "Mental health is a journey of self-care, self-discovery, and self-acceptance.",
        author: "",
    },
    {
        quote: "Friendship is a treasure that enriches our lives with laughter, support, and shared experiences.",
        author: "",
    },
    {
        quote: "Relationships thrive on trust, communication, and the willingness to grow together.",
        author: "",
    },
    {
        quote: "Gratefulness is the practice of recognizing and appreciating the abundance in our lives.",
        author: "",
    },
    {
        quote: "Motivation is the inner fire that drives us to take action and strive for greatness.",
        author: "",
    },
    {
        quote: "Life is a canvas; paint it with the colors of love, joy, and purpose.",
        author: "",
    },
    {
        quote: "Each new day is a blank page; fill it with positivity, gratitude, and kindness.",
        author: "",
    },
    {
        quote: "The power to change your life lies in your hands; embrace it and create the future you envision.",
        author: "",
    },
    {
        quote: "Embrace your uniqueness, for it is the source of your strength and individuality.",
        author: "",
    },
    {
        quote: "The beauty of life lies not in the destination, but in the journey itself.",
        author: "",
    },
    {
        quote: "Adversity is not an obstacle; it's an opportunity for growth and resilience.",
        author: "",
    },
    {
        quote: "Success is not a one-time achievement; it's a continuous journey of growth and self-improvement.",
        author: "",
    },
    {
        quote: "Hard work may be challenging, but it is the key that unlocks the doors of success.",
        author: "",
    },
    {
        quote: "Children are the hope of the future, and it is our responsibility to nurture their dreams.",
        author: "",
    },
    {
        quote: "Relationships thrive on trust, respect, and open communication.",
        author: "",
    },
    {
        quote: "Thankfulness is the practice of counting our blessings and appreciating the small moments of joy.",
        author: "",
    },
    {
        quote: "Gratefulness is the attitude of recognizing the abundance in our lives and expressing appreciation.",
        author: "",
    },
    {
        quote: "Motivation is the driving force that pushes us towards our goals, even in the face of challenges.",
        author: "",
    },
    {
        quote: "Life is a journey of discovery, where we uncover our true potential and purpose.",
        author: "",
    },
    {
        quote: "Self-confidence is the belief that we have the power to overcome any obstacle.",
        author: "",
    },
    {
        quote: "Every child is a unique and precious gift, deserving of love, care, and guidance.",
        author: "",
    },
    {
        quote: "Teenagers have the capacity to inspire and lead, shaping a better future for all.",
        author: "",
    },
    {
        quote: "Learning is a lifelong journey that fuels personal growth and unlocks new opportunities.",
        author: "",
    },
    {
        quote: "Empathy is the bridge that connects hearts, fostering understanding and compassion.",
        author: "",
    },
    {
        quote: "Psychology helps us understand the complexities of the human mind and behavior.",
        author: "",
    },
    {
        quote: "Mental health is as important as physical health, and seeking support is a sign of strength.",
        author: "",
    },
    {
        quote: "Friendship is a bond that brings laughter, support, and shared experiences.",
        author: "",
    },
    {
        quote: "Relationships thrive on trust, communication, and mutual growth.",
        author: "",
    },
    {
        quote: "Thankfulness is the practice of recognizing and appreciating the blessings in our lives.",
        author: "",
    },
    {
        quote: "Gratefulness is the attitude of contentment and appreciation for the abundance in our lives.",
        author: "",
    },
    {
        quote: "Motivation is the inner fire that propels us towards our dreams and goals.",
        author: "",
    },
    {
        quote: "Success is not measured by material possessions, but by the impact we have on others.",
        author: "",
    },
    {
        quote: "Hard work is the foundation upon which dreams are built and achievements are made.",
        author: "",
    },
    {
        quote: "Self-confidence is the belief in our own abilities and the courage to pursue our dreams.",
        author: "",
    },
    {
        quote: "Children are the future, and it is our responsibility to guide them towards a better tomorrow.",
        author: "",
    },
    {
        quote: "Teenagers are the catalysts of change, with the power to shape the world through their actions.",
        author: "",
    },
    {
        quote: "Learning is the key that unlocks the doors to personal growth and transformation.",
        author: "",
    },
    {
        quote: "Empathy is the ability to understand and share the feelings of others, fostering connection.",
        author: "",
    },
    {
        quote: "Psychology provides insights into the human mind, helping us understand ourselves and others.",
        author: "",
    },
];

const strQuotes = QUOTES.map((quote) => JSON.stringify(quote));

const set = new Set(strQuotes);

const uniqueQuotes = Array.from(set).map((quote) => JSON.parse(quote));
