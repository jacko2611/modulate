const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Synthesizers' },
    { name: 'Guitars' },
    { name: 'Basses' },
    { name: 'Effects Pedals' },
    { name: 'Amplifiers' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Moog Subsequent 37',
      description:
        'The SUB 37 Tribute Edition is a limited release, 2-note paraphonic analog synthesizer built on the award winning Sub Phatty sound engine, but specifically enhanced to meet the demands of professional synthesists, sound designers, and keyboard players.',
      image: '/Users/jacksonkent/Desktop/Bootcamp/modulate/client/src/assets/images/moog-subsequent-37.jpg.jpg',
      category: categories[0]._id,
      price: 2850.00,
      quantity: 10
    },
    {
      name: 'Roland Juno 60',
      description:
        'Used but in excellent condition. The Roland JUNO-60 helped define the sound of the ‘80s and is highly prized for its vintage vibe and unmistakable character. Simply put, it’s the sound you hear in your head when you think of fat, punchy analog synthesizers.',
      image: 'client/src/assets/images/roland-juno-60.jpg',
      category: categories[0]._id,
      price: 3500.00,
      quantity: 1
    },
    {
      name: 'Fender Jazzmaster',
      category: categories[1]._id,
      description:
        'May 1965 Fender Jazzmaster in amazing condition. Professionally setup by Central Coast Guitar shop, plays beautifully with a great neck and very low action. All original except for the bridge cover which has been replaced with a new one. Also has the original leather strap.',
      image: 'client/src/assets/images/fender-jazzmaster.jpg',
      price: 13500.00,
      quantity: 1
    },
    {
      name: 'Gibson Les Paul',
      category: categories[1]._id,
      description:
        '2011 Les Paul Standard with a highly figured maple top and faded Ice Tea Burst style finish. Features lightweight chambered mahogany body, mahogany neck, original tinted plastic control covers, and locking Neutrik output socket. Made in USA.',
      image: 'client/src/assets/images/gibson-les-paul.jpg',
      price: 8500.00,
      quantity: 1
    },
    {
      name: 'Fender Stratocaster',
      category: categories[1]._id,
      description:
        'Original Fender Stratocaster from 1978. Straight neck. Electronics all working.',
      image: 'client/src/assets/images/fender-stratocaster.jpg',
      price: 5000.00,
      quantity: 1
    },
    {
      name: 'Fender Precision Bass',
      category: categories[2]._id,
      description:
        'There’s nothing more classic than a Fender electric bass, and the Player Precision Bass is as authentic as it gets—genuine Fender style and the rumbling, seismic sound that spawned a thousand imitations.',
      image: 'client/src/assets/images/fender-precision-bass.jpg',
      price: 1240.00,
      quantity: 2
    },
    {
      name: 'Rickenbacker 4003',
      category: categories[2]._id,
      description:
        'The Classic Rickenbacker bass - famous for its ringing sustain, treble punch and solid underlying bass. A subtle strip of binding graces the elegantly curved body and the Rosewood fingerboard. Deluxe triangular inlays and stereo capability are standard features. Colour: JetGlo',
      image: 'client/src/assets/images/rickenbacker-4003.jpg.jpeg',
      price: 4000.00,
      quantity: 2
    },
    {
      name: 'Chase Bliss Mood MKII',
      category: categories[3]._id,
      description:
        'MOOD MKII is a different kind of multi-effect. Its two channels are aware of each other and work together. One half samples and loops brief moments, the other is a collection of real-time spatial effects. Twist any sound into a sprawling texture that you can freeze, loop and scatter across the stereo field, for instant gratification and endless exploration. It’s a musical chemistry set. Transfer, combine, and get lost.',
      image: 'client/src/assets/images/mood.jpg',
      price: 500.00,
      quantity: 10
    },
    {
      name: 'Benson Preamp',
      category: categories[3]._id,
      description: 'We call this our Preamp because it is! The circuit is based on the our Chimera 30 watt guitar amplifier, but substitutes FET transistors for the vacuum tubes. The result is an extremely amp-like and versatile clean boost/overdrive/fuzz pedal that imparts rich harmonics and a very musical EQ to your signal chain…truly a Chimera in a box!',
      image: 'client/src/assets/images/preamp.jpg',
      price: 300.00,
      quantity: 8
    },
    {
      name: 'Fender Princeton',
      category: categories[4]._id,
      description:
        `A historically significant amp used on countless hit songs for decades. Today, the 1965 Princeton Reverb is as phenomenal looking, sounding and performing as ever, and is easily versatile enough to go from the living room to the recording studio to the gig with the great sound, style, reliability and authentic vintage vibe that Fender players know and love. One of the coolest amps around, period, it's ideal for anyone who demands top-notch tube tone, naturally dynamic clean and overdriven sound, and unmistakable long-spring Fender reverb and tube vibrato.`,
      image: 'client/src/assets/images/princeton.jpg',
      price: 2300.00,
      quantity: 4
    },
    {
      name: 'Magnatone Twilighter',
      category: categories[4]._id,
      description:
        'The Twilighter picks up were the classic American combo amps of the past left off. With a pair of 6V6 power tubes and a GZ34 rectifier, the Twilighter offers 22 watts of clean, robust tone in  a 12" speaker combo that is light yet durable. Add the tube driven reverb, tremolo, and varistor true pitch shifting vibrato and you have a new American classic that is sure to please!',
      image: 'client/src/assets/images/magnatone-twilighter.jpg',
      price: 4500.00,
      quantity: 2
    },
    {
      name: 'Marshall JTM-45',
      category: categories[4]._id,
      description:
        `The Marshall 2245 JTM45 30-watt head is an authentic reissue of Marshall's very first amp, the JTM45. Celebrated by guitar enthusiasts for its groundbreaking sound, the original JTM45 has become a true classic, and the 2245 JTM45 authentically recreates its inimitable tone. This meticulously designed reissue is incredibly accurate, and the key is the painstakingly reproduced GZ34 rectification.`,
      image: 'client/src/assets/images/marshall.jpg',
      price: 2400.00,
      quantity: 3
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@test.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Jackson',
    lastName: 'Kent',
    email: 'jkent@hotmail.com',
    password: 'QAZwsx123'
  });

  console.log('users seeded');

  process.exit();
});
