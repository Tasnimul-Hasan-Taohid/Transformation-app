const phases = [
  {
    label: "Week 1–2 · Starter",
    stats: ["20 min", "3×10 reps", "~350 kcal/day"],
    statLabels: ["Run duration", "Strength sets", "Est. daily burn"],
    days: [
      {
        type: "run", label: "Run", icon: "→", name: "Monday",
        title: "Easy run", sub: "20 min · conversational pace",
        exercises: [
          { name: "5 min warm-up walk", meta: "Before running", tip: "Never skip this. Cold muscles = injury risk." },
          { name: "20 min easy jog", meta: "Conversational pace — you can speak full sentences", tip: "If you can't talk, slow down. Building the aerobic base is the goal, not speed." },
          { name: "5 min cool-down walk", meta: "After run", tip: "Brings heart rate down safely." },
          { name: "Calf + quad stretch", meta: "2 min each side", tip: "Hold each stretch 30 sec. Don't bounce." }
        ]
      },
      {
        type: "strength", label: "Strength", icon: "↑", name: "Tuesday",
        title: "Upper body strength", sub: "Chest · Shoulders · Core",
        exercises: [
          { name: "Push-ups", meta: "3 × 10 reps · slow pace", tip: "2 sec down, 1 sec up. If 10 feels easy, add 2 reps next session." },
          { name: "Incline push-ups", meta: "3 × 12 reps · hands on chair", tip: "Lower chest focus. Keep body straight like a plank." },
          { name: "Pike push-ups", meta: "3 × 8 reps", tip: "Hips high. Head moves toward floor. Builds shoulder width." },
          { name: "Plank", meta: "3 × 30 sec", tip: "Squeeze core + glutes. Don't let hips drop." }
        ]
      },
      {
        type: "run", label: "Run", icon: "→", name: "Wednesday",
        title: "Easy run", sub: "20 min · same pace",
        exercises: [
          { name: "5 min warm-up walk", meta: "Light pace", tip: "Shake out legs from Tuesday's workout." },
          { name: "20 min easy jog", meta: "Same pace as Monday", tip: "Your body is still adapting. Don't push harder yet." },
          { name: "5 min cool-down walk", meta: "After run", tip: "" },
          { name: "Hip flexor + hamstring stretch", meta: "2 min each side", tip: "Sitting most of the day tightens hip flexors badly. Always stretch these." }
        ]
      },
      {
        type: "combo", label: "Combo", icon: "*", name: "Thursday",
        title: "Full body + core", sub: "Legs · Core · Fat burn",
        exercises: [
          { name: "Squats", meta: "4 × 15 reps", tip: "Thighs parallel to floor. Big muscle group = more calories burned." },
          { name: "Lunges", meta: "3 × 10 each leg", tip: "Step forward, keep knee behind toes." },
          { name: "Mountain climbers", meta: "3 × 20 reps", tip: "Fast knees to chest. Cardio + core in one move." },
          { name: "Plank", meta: "3 × 30 sec", tip: "Same as Tuesday. Consistency builds core faster than variety." }
        ]
      },
      {
        type: "run", label: "Run", icon: "→", name: "Friday",
        title: "Slightly longer run", sub: "25 min · easy pace",
        exercises: [
          { name: "5 min warm-up walk", meta: "", tip: "" },
          { name: "25 min easy jog", meta: "5 min more than Mon/Wed", tip: "Small weekly increase is the key to building without injury." },
          { name: "5 min cool-down walk", meta: "", tip: "" },
          { name: "Full leg stretch", meta: "Quad, hamstring, calf — 2 min each", tip: "Friday run is the longest of the week. Give the legs extra attention." }
        ]
      },
      {
        type: "strength", label: "Strength", icon: "↑", name: "Saturday",
        title: "Lower body + core", sub: "Legs · Glutes · Core",
        exercises: [
          { name: "Jump squats", meta: "3 × 10 reps", tip: "Land softly. Bend knees on landing to protect joints." },
          { name: "Glute bridges", meta: "3 × 15 reps", tip: "Lie on back, feet flat, push hips up. Hold 1 sec at top." },
          { name: "Burpees", meta: "3 × 8 reps", tip: "The single best bodyweight fat-burning move. Rest 60 sec between sets." },
          { name: "Side plank", meta: "2 × 20 sec each side", tip: "Builds lateral core which improves your running posture." }
        ]
      },
      {
        type: "rest", label: "Rest", icon: "—", name: "Sunday",
        title: "Rest day", sub: "Walk if you want",
        exercises: [
          { name: "Light walk (optional)", meta: "15–20 min casual walk", tip: "Active recovery. Not a workout — just keeps blood moving." },
          { name: "Full body stretch", meta: "10 min", tip: "Sun is the best day to stretch properly. Focus on hips, hamstrings, chest." }
        ]
      }
    ]
  },
  {
    label: "Week 3–4 · Build",
    stats: ["25 min", "3×12 reps", "~420 kcal/day"],
    statLabels: ["Run duration", "Strength sets", "Est. daily burn"],
    days: [
      {
        type: "run", label: "Run", icon: "→", name: "Monday",
        title: "Easy run", sub: "25 min · steady pace",
        exercises: [
          { name: "5 min warm-up walk", meta: "", tip: "" },
          { name: "25 min jog", meta: "Slightly faster than week 1–2", tip: "You should feel like you're working, but still able to speak short sentences." },
          { name: "5 min cool-down walk", meta: "", tip: "" },
          { name: "Stretch", meta: "Calf + quad · 2 min each", tip: "" }
        ]
      },
      {
        type: "strength", label: "Strength", icon: "↑", name: "Tuesday",
        title: "Upper body strength", sub: "Chest · Shoulders · Core",
        exercises: [
          { name: "Push-ups", meta: "3 × 12 reps", tip: "2 more reps than week 1. If still easy, add 2 more." },
          { name: "Decline push-ups", meta: "3 × 10 reps · feet on chair", tip: "Harder than regular push-ups. Hits upper chest more." },
          { name: "Pike push-ups", meta: "3 × 10 reps", tip: "2 more reps than before. Shoulders getting stronger." },
          { name: "Plank", meta: "3 × 40 sec", tip: "10 more seconds than week 1. Slow progression matters." }
        ]
      },
      {
        type: "run", label: "Run", icon: "→", name: "Wednesday",
        title: "Interval run", sub: "20 min · alternating pace",
        exercises: [
          { name: "5 min warm-up walk", meta: "", tip: "" },
          { name: "Intervals · 10 min", meta: "1 min fast / 1 min slow × 5", tip: "This is your first HIIT run. The fast intervals burn way more fat than steady jogging." },
          { name: "5 min easy jog", meta: "Wind-down pace", tip: "" },
          { name: "5 min cool-down walk", meta: "", tip: "" }
        ]
      },
      {
        type: "combo", label: "Combo", icon: "*", name: "Thursday",
        title: "Full body circuit", sub: "Legs · Core · Cardio",
        exercises: [
          { name: "Squats", meta: "4 × 18 reps", tip: "3 more reps per set. Keep form over speed." },
          { name: "Lunges", meta: "3 × 12 each leg", tip: "" },
          { name: "Burpees", meta: "3 × 10 reps", tip: "2 more reps than week 1." },
          { name: "Mountain climbers", meta: "3 × 25 reps", tip: "" },
          { name: "Plank", meta: "3 × 40 sec", tip: "" }
        ]
      },
      {
        type: "run", label: "Run", icon: "→", name: "Friday",
        title: "Longer easy run", sub: "30 min · conversational pace",
        exercises: [
          { name: "5 min warm-up walk", meta: "", tip: "" },
          { name: "30 min easy jog", meta: "Your longest run yet", tip: "Don't try to run fast. Distance and time matter more right now." },
          { name: "5 min cool-down walk", meta: "", tip: "" },
          { name: "Full leg + hip stretch", meta: "3 min each area", tip: "After a 30 min run, spend real time on recovery stretching." }
        ]
      },
      {
        type: "strength", label: "Strength", icon: "↑", name: "Saturday",
        title: "Lower body + core", sub: "Legs · Glutes · Core",
        exercises: [
          { name: "Jump squats", meta: "3 × 12 reps", tip: "" },
          { name: "Glute bridges", meta: "3 × 18 reps", tip: "" },
          { name: "Burpees", meta: "3 × 10 reps", tip: "" },
          { name: "Side plank", meta: "2 × 30 sec each side", tip: "10 more seconds than week 1." },
          { name: "Bicycle crunches", meta: "3 × 15 reps", tip: "New this phase. Targets the obliques — tightens your waist." }
        ]
      },
      {
        type: "rest", label: "Rest", icon: "—", name: "Sunday",
        title: "Rest day", sub: "Walk + stretch",
        exercises: [
          { name: "Walk", meta: "20 min light", tip: "" },
          { name: "Full body stretch", meta: "15 min", tip: "By week 3–4 your muscles need proper recovery. Don't skip this." }
        ]
      }
    ]
  },
  {
    label: "Week 5–6 · Push",
    stats: ["30 min", "4×12 reps", "~500 kcal/day"],
    statLabels: ["Run duration", "Strength sets", "Est. daily burn"],
    days: [
      {
        type: "run", label: "Run", icon: "→", name: "Monday",
        title: "Steady run", sub: "30 min · comfortable push",
        exercises: [
          { name: "5 min warm-up walk", meta: "", tip: "" },
          { name: "30 min jog", meta: "Faster than week 3–4 easy pace", tip: "You've built enough base. Start pushing the comfortable pace slightly." },
          { name: "5 min cool-down walk", meta: "", tip: "" },
          { name: "Stretch", meta: "", tip: "" }
        ]
      },
      {
        type: "strength", label: "Strength", icon: "↑", name: "Tuesday",
        title: "Upper body strength", sub: "Chest · Shoulders · Core · Arms",
        exercises: [
          { name: "Push-ups", meta: "4 × 15 reps", tip: "4 sets now. This is the main chest driver." },
          { name: "Decline push-ups", meta: "4 × 12 reps", tip: "" },
          { name: "Pike push-ups", meta: "3 × 12 reps", tip: "" },
          { name: "Diamond push-ups", meta: "3 × 8 reps · hands together", tip: "New this phase. Targets inner chest + triceps. Hard at first — that's normal." },
          { name: "Plank", meta: "3 × 50 sec", tip: "" }
        ]
      },
      {
        type: "run", label: "Run", icon: "→", name: "Wednesday",
        title: "HIIT run", sub: "25 min · hard intervals",
        exercises: [
          { name: "5 min warm-up walk", meta: "", tip: "" },
          { name: "Intervals · 15 min", meta: "1 min sprint / 90 sec slow × 6", tip: "Sprint means genuinely fast — 80% effort. This is the most powerful fat-burning session in the week." },
          { name: "5 min easy jog", meta: "", tip: "" },
          { name: "5 min cool-down walk", meta: "", tip: "" }
        ]
      },
      {
        type: "combo", label: "Combo", icon: "*", name: "Thursday",
        title: "Full body circuit", sub: "Legs · Core · Power",
        exercises: [
          { name: "Squats", meta: "4 × 20 reps", tip: "" },
          { name: "Jump lunges", meta: "3 × 10 each leg", tip: "Harder than regular lunges. Explosive power + fat burn." },
          { name: "Burpees", meta: "4 × 10 reps", tip: "4 sets now. One of the best full-body exercises you can do at home." },
          { name: "Mountain climbers", meta: "3 × 30 reps", tip: "" },
          { name: "Plank", meta: "3 × 50 sec", tip: "" }
        ]
      },
      {
        type: "run", label: "Run", icon: "→", name: "Friday",
        title: "Long run", sub: "35 min · easy pace",
        exercises: [
          { name: "5 min warm-up walk", meta: "", tip: "" },
          { name: "35 min easy jog", meta: "Longest run of the plan", tip: "Easy pace only. This builds your aerobic engine — don't rush it." },
          { name: "5 min cool-down walk", meta: "", tip: "" },
          { name: "Full stretch", meta: "15 min", tip: "After 35 min you need proper stretching. Hips, hamstrings, calves especially." }
        ]
      },
      {
        type: "strength", label: "Strength", icon: "↑", name: "Saturday",
        title: "Lower body + core", sub: "Legs · Glutes · Core · Power",
        exercises: [
          { name: "Jump squats", meta: "4 × 12 reps", tip: "" },
          { name: "Glute bridges with hold", meta: "3 × 15 reps · 2 sec hold", tip: "The hold makes it much harder. Glutes are the biggest muscle — training them burns more." },
          { name: "Burpees", meta: "4 × 10 reps", tip: "" },
          { name: "Side plank", meta: "3 × 35 sec each side", tip: "" },
          { name: "Bicycle crunches", meta: "3 × 20 reps", tip: "" },
          { name: "Hollow body hold", meta: "3 × 20 sec", tip: "New this phase. Lie flat, raise legs + shoulders slightly off ground. Brutal core exercise." }
        ]
      },
      {
        type: "rest", label: "Rest", icon: "—", name: "Sunday",
        title: "Rest day", sub: "Full recovery",
        exercises: [
          { name: "Walk", meta: "20–30 min", tip: "" },
          { name: "Full body stretch", meta: "15–20 min", tip: "Week 5–6 your body is working hard. Sunday recovery is as important as any workout day." }
        ]
      }
    ]
  }
];
