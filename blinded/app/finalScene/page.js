'use client';

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function FinalScene() {
  const dialogue = [
    { speaker: 'detective', text: 'So...', bg: 'calm' },
    { speaker: 'detective', text: 'Do you want to tell me what happened?', bg: 'calm' },
    {speaker: 'poolboy', text: '……', bg: 'calm' },
    { speaker: 'detective', text: '……', bg: 'calm' },
    { speaker: 'detective', text: "You killed him didn't you?", bg: 'calm' },
    {speaker: 'poolboy', text: '……', bg: 'calm' },
    { speaker: 'detective', text: 'I know why you did it.', bg: 'calm' },
    {
      speaker: 'detective',
      text: 'Your mother... overdosed on that same drug. The one we found in Cade.',
      bg: 'calm',
    },
    { speaker: 'poolboy', text: '…You don’t know anything about her.', bg: 'calm' },
    {
      speaker: 'detective',
      text: 'She died alone. Cade left her — and you.',
      bg: 'calm',
    },
    {
      speaker: 'detective',
      text: 'And I know you found out who he was — and you planned this.',
      bg: 'dnaResult',
    },
    {
      speaker: 'poolboy',
      text: "That doesn't mean anything...",
      bg: 'dnaResult',
    },
    {
      speaker: 'detective',
      text: "It doesn't?",
      bg: 'calm',
    },
    {
      speaker: 'detective',
      text: 'He never even knew who you were.',
      bg: 'calm',
    },
    {
      speaker: 'detective',
      text: 'But you made sure he knew, didn’t you?',
      bg: 'calm',
    },
    {
      speaker: 'detective',
      text: 'You made him die the same way.',
      bg: 'calm',
    },
    { speaker: 'poolboy', text: '........', bg: 'calm' },
    { speaker: 'poolboy', text: 'You could never understand how that felt.', bg: 'calm' },
    { speaker: 'poolboy', text: 'To witness someone be alive but live as though they were dead.', bg: 'calm' },
    { speaker: 'poolboy', text: 'After all these years that I had to live in that misery.', bg: 'calm' },
    { speaker: 'poolboy', text: 'I saw him there...', bg: 'calm' },
    {
      speaker: 'poolboy',
      text: '...laughing. Drinking. Like nothing mattered.',
      bg: 'flashbackCade',
      isFlashback: true
    }, 
    {
      speaker: 'poolboy',
      text: 'He was wrapped head to toe in luxury smiling like a con man.',
      bg: 'flashbackCade',
      isFlashback: true
    }, 
    {
      speaker: 'poolboy',
      text: 'In that moment I wanted nothing more than to wipe that stupid grin off his face.',
      bg: 'flashbackCade',
      isFlashback: true
    },  
    {
      speaker: 'poolboy',
      text: 'He stepped away for a moment to remove his suit jacket.',
      bg: 'flashbackCade',
    },
    {
      speaker: 'poolboy',
      text: 'That was my opening.',
      bg: 'flashbackCade',
    },
    {
      speaker: 'poolboy',
      text: 'So I waited until no one was watching...',
      bg: 'flashbackCade',
    },
    {
      speaker: 'poolboy',
      text: '...and I dropped the powder into his glass.',
      bg: 'dropPowder',
    },
    {
      speaker: 'poolboy',
      text: 'It was the same stuff that killed her.',
      bg: 'dropPowder',
    },
    {
      speaker: 'poolboy',
      text: 'I watched him drink every.. last.. drop.',
      bg: 'drinkPoison',
    },
    {
      speaker: 'poolboy',
      text: "It didn't take long to infiltrate his system.",
      bg: 'drinkPoison',
    },
    {
      speaker: 'poolboy',
      text: "Later that night I watched the drug take his life.",
      bg: 'calm',
    },
    {
      speaker: 'poolboy',
      text: "He just so happened to end up in the pool. ",
      bg: 'calm',
    },
    {
      speaker: 'poolboy',
      text: "It should've been my perfect chance to make it look like an accident. ",
      bg: 'calm',
    },
    {
      speaker: 'poolboy',
      text: "But all you cops ever do is snoop your nose where it doesn't belong.",
      bg: 'calm',
    },
    {
      speaker: 'poolboy',
      text: 'YES! I KILLED HIM! HE DESERVED TO DIE THE SAME WAY MY MOM DID!',
      isYell: true,
      bg: 'angry',
      triggersAngry: true,
    },
    {
      speaker: 'poolboy',
      text: 'He walked around like he owned everything! Like he never did a thing wrong!',
      bg: 'angry',
    },
    {
      speaker: 'poolboy',
      text: 'He left her to die, and then smiled in my face like I was just another nobody.',
      bg: 'angry',
    },
    {
      speaker: 'poolboy',
      text: 'I didn’t just kill him. I made sure he suffered the same fate.',
      bg: 'angry',
    },
    {
      speaker: 'poolboy',
      text: 'Dying alone with no one around!',
      bg: 'angry',
    },
    {
      speaker: 'officer',
      text: '(Footsteps echo outside the room...)',
      bg: 'angry',
    },
    {
      speaker: 'detective',
      text: 'She didn’t get justice. So you gave her revenge.',
      bg: 'angry',
    },
    {
      speaker: 'poolboy',
      text: 'It was the only way I could make him feel what she felt.',
      bg: 'angry',
    },
    {
      speaker: 'poolboy',
      text: 'He left us with nothing. And I made sure he left with nothing, too.',
      bg: 'angry',
    },
    {
      speaker: 'poolboy',
      text: 'I had a mission to fulfill.',
      bg: 'noRemorse',
    },
    {
      speaker: 'poolboy',
      text: 'And I got what I wanted.',
      bg: 'noRemorse',
    },
    {
      speaker: 'poolboy',
      text: "I don't regret a thing.",
      bg: 'noRemorse',
    },
    {
      speaker: 'officer',
      text: '(Handcuffs click softly)',
      isFx: true,
      bg: 'arrest',
      triggersArrest: true,
    },
    {
      speaker: 'detective',
      text: 'He gave his father a death sentence. But the man was already living a lie.',
      isSoft: true,
      bg: 'arrest',
    },
    {
      speaker: 'partner',
      text: 'Do you think he knew?',
      isSoft: true,
      bg: 'arrest',
    },
    {
      speaker: 'detective',
      text: 'The truth came too late. For both of them.',
      isSoft: true,
      bg: 'arrest',
    },
    {
      speaker: 'detective',
      text: 'Cade never even knew he had a son.',
      isSoft: true,
      bg: 'arrest',
    },
    {
      speaker: '',
      text: '',
      bg: 'end',
    },
  ];


  const [lineIndex, setLineIndex] = useState(0);
  const [bgStage, setBgStage] = useState(dialogue[0].bg);
  const [animClass, setAnimClass] = useState('');
  const [showText, setShowText] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [initialZoom, setInitialZoom] = useState(true);
  const [zoomLocked, setZoomLocked] = useState(false);
  const [isFirstLine, setIsFirstLine] = useState(true);
  const [isBouncing, setIsBouncing] = useState(false);
  const [showEndScreen, setShowEndScreen] = useState(false);

  const router = useRouter();

  const currentLine = dialogue[lineIndex];

  const handleClick = () => {
    if (isTransitioning || showEndScreen) return;

    const nextIndex = lineIndex + 1;
    const nextLine = dialogue[nextIndex];
    if (!nextLine) return;

    const nextBg = nextLine.bg || 'calm';
    const needsTransition = nextBg !== bgStage;

    setShowText(false);
    setIsTransitioning(true);
    if (isFirstLine) setIsFirstLine(false);

    if (needsTransition) {
      setBgStage(nextBg);

      if (nextLine.triggersAngry) {
        setIsBouncing(true);
        setAnimClass('lashOut');
        setTimeout(() => setIsBouncing(false), 500);
      } else if (nextLine.triggersArrest) {
        setAnimClass('zoomIn');
      } else if (nextBg === 'dnaResult') {
        setAnimClass('fadeSlideIn');
      } else {
        setAnimClass('fadeIn');
      }

      setTimeout(() => {
        setLineIndex(nextIndex);
        setShowText(true);
        setIsTransitioning(false);

        if (nextLine.bg === 'end') {
          setTimeout(() => router.push('/endMessage')); 
        }

      }, nextLine.bg === 'flashbackCade' ? 1600 : 800);
    } else {
      setLineIndex(nextIndex);
      setShowText(true);
      setIsTransitioning(false);
    }
  };

  useEffect(() => {
    document.body.style.margin = '0';
    setTimeout(() => {
      setInitialZoom(false);
      setZoomLocked(true);
      setShowText(true);
      setIsTransitioning(false);
    }, 3000);
    return () => {
      document.body.style.margin = '';
    };
  }, []);

  const getImage = () => {
    switch (bgStage) {
      case 'angry': return '/interrogationAngryScene.jpg';
      case 'arrest': return '/arrestPoolBoy.jpg';
      case 'dnaResult': return '/dnaResult.jpg';
      case 'flashbackCade': return '/flashbackCade.jpg';
      case 'dropPowder': return '/dropPowder.jpg';
      case 'drinkPoison': return '/drinkPoison.jpg';
      case 'noRemorse': return '/noRemorse.jpg';
      case 'end': return '';
      default: return '/interrogationScene.jpg';
    }
  };

  return (
    <div className="scene" onClick={handleClick}>
      <div
        className={`background ${
          bgStage === 'flashbackCade'
            ? 'flashback'
            : initialZoom
            ? 'initialZoom'
            : isBouncing
            ? 'lashOut'
            : zoomLocked
            ? 'zoomLocked'
            : animClass
        }`}
        style={{ backgroundImage: `url("${getImage()}")` }}
      />

      {bgStage === 'arrest' && (
        <>
          <div className="siren-flash" />
          <div className="arrest-overlay" />
        </>
      )}

      {showText && !showEndScreen && currentLine.speaker !== 'end' && (
        <div className={`dialogue ${isFirstLine ? 'dialogueIntro' : ''}`}>
          <p
            className={`${currentLine.speaker} ${currentLine.isYell ? 'yell' : ''} ${
              currentLine.isFx ? 'fx' : ''
            } ${currentLine.isSoft ? 'soft' : ''}`}
          >
            {currentLine.speaker === 'officer' ? '' : `${capitalize(currentLine.speaker)}:`}{' '}
            {currentLine.text}
          </p>
        </div>
      )}

      <style jsx>{`
        .scene {
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          background-color: black;
          cursor: pointer;
          position: relative;
        }

        .background {
          height: 100%;
          width: 100%;
          position: absolute;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          z-index: 0;
        }

        .initialZoom {
          animation: zoomIntro 2s ease-out both;
          transform: scale(1);
          opacity: 0;
          filter: blur(10px);
        }

        @keyframes zoomIntro {
          to {
            transform: scale(1.03);
            opacity: 1;
            filter: blur(0);
          }
        }

        .zoomLocked {
          transform: scale(1.03);
          opacity: 1;
          filter: blur(0);
        }

        .fadeIn {
          animation: fadeInBlur 0.8s ease-out forwards;
          filter: blur(10px);
          opacity: 0;
        }

        @keyframes fadeInBlur {
          to {
            filter: blur(0);
            opacity: 1;
          }
        }

        .fadeSlideIn {
          animation: slideInFade 1s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes slideInFade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .lashOut {
          animation: lashOut 0.5s ease-in-out;
        }

        @keyframes lashOut {
          0% { transform: translate(0, 0) scale(1.03); }
          20% { transform: translate(-5px, 2px) scale(1.05); }
          40% { transform: translate(5px, -2px) scale(1.07); }
          60% { transform: translate(-3px, 2px) scale(1.04); }
          80% { transform: translate(2px, -1px) scale(1.03); }
          100% { transform: translate(0, 0) scale(1.03); }
        }

        .zoomIn {
          transform: scale(1.05);
          transition: transform 1.8s ease-in-out;
        }

        .dialogue {
          position: absolute;
          bottom: 40px;
          left: 5%;
          right: 5%;
          z-index: 2;
          color: white;
          background: rgba(0, 0, 0, 0.7);
          padding: 20px;
          border-radius: 10px;
          font-family: 'Courier New', monospace;
          font-size: 1.2rem;
        }

        .dialogueIntro {
          animation: fadeDialogue 1s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeDialogue {
          to {
            opacity: 1;
          }
        }

        .detective { color: #79a9f5; }
        .partner { color: rgb(128, 130, 133); }
        .poolboy { color: #f57b7b; }

        .yell {
          font-weight: bold;
          font-size: 1.4rem;
          text-transform: uppercase;
        }

        .soft {
          font-style: italic;
          opacity: 0.8;
        }

        .fx {
          color: gray;
          text-align: center;
          font-size: 0.95rem;
        }

        .arrest-overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: radial-gradient(circle at center, rgba(0,0,0,0.1), rgba(0,0,0,0.7));
          pointer-events: none;
          z-index: 1;
        }

        .siren-flash {
          animation: sirenFlash 1s ease-in-out 3;
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        @keyframes sirenFlash {
          0% { background-color: rgba(0, 0, 255, 0.2); }
          25% { background-color: rgba(255, 0, 0, 0.2); }
          50% { background-color: rgba(0, 0, 255, 0.3); }
          75% { background-color: rgba(255, 0, 0, 0.3); }
          100% { background-color: transparent; }
        }
      `}</style>
    </div>
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}