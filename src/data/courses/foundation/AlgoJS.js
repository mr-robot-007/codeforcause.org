export const algoJS = {
  difficulty: 'Foundation',
  duration: '40 Live Lectures',
  level: 'Level 1',
  link: '/ds-algo-with-js',
  domain: 'Algorithms & Complexities',
  title: 'Data Structures and Algorithms with JS',
  started: 'Jan 30th (Regular)',
  upcoming: 'June 27th (Regular)',
  language: 'Hindi',
  mentors: ['anuj', 'abhishek', 'vasu'],
  default: 1,
  schedule: [
    {
      courseId: 'pds0121',
      dates: '30th Jan - 30th Apr',
      days: 'Sat, Sun, Wed, Fri',
      timing: '04:00 PM - 06:00 PM (IST)',
      link: '',
      priceCut: '',
      price: '₹ 10,000',
      priceId: 'price_1I0UveLVU3L7vcSrvRIaf1aL',
      duration: '40 Live Lectures (2 hrs)',
      active: false
    },
    {
      courseId: 'pds0122',
      dates: '27th Jun - 04th Sep',
      days: 'Sat, Sun, Wed, Fri',
      timing: '06:00 PM - 08:00 PM (IST)',
      link: '',
      priceCut: '',
      price: '₹ 12,000',
      priceId: 'price_1IjJohLVU3L7vcSr4sYdfDCP',
      duration: '40 Live Lectures',
      mentor: 'Anuj Garg, Abhishek Kumar, Vasudev Singhal',
      language: 'Hindi',
      active: true
    }
  ],
  projects: [
    {
      title: 'Automatic Sudoku Solver',
      img: '/static/images/courses/projects/sudoku.jpg'
    },
    {
      title: 'File Encryption and Compression',
      img: '/static/images/courses/projects/security.jpg'
    },
    {
      title: 'Splitwise Cashflow Minimization',
      img: '/static/images/courses/projects/split.png'
    },
    {
      title: 'Search routes like Google Maps',
      img: '/static/images/courses/projects/maps.png'
    },
    {
      title: 'Git Version Control Replica',
      img: '/static/images/courses/projects/git.png'
    }
  ],
  sections: [
    {
      title: 'JavaScript Foundation Constructs',
      classes: 'Classes 01-20',
      topics: [
        {
          title: 'Getting started with JavaScript',
          classes: 'Classes 01-03',
          subtopics: [
            'Flowcharts & Pseudocode',
            'Control Flow Statements ',
            'Setting up JS Environment',
            'Fundamental data-types',
            'Input-Output on online judge',
            'File Handling',
            'Coding standards in Python',
            'functions along with problems',
            'Setting up debugger'
          ]
        },
        {
          title: 'Arrays in JavaScript',
          classes: 'Classes 04-07',
          subtopics: [
            'Introduction of Arrays',
            'Input-output & traversing',
            'Linear Search & Binary Search',
            'Bubble sort, Insertion sort, Selection sort, Count sort',
            'Rotation in Arrays',
            'Interview problems on Arrays'
          ]
        },
        {
          title: 'Number theory & Bitmasking',
          classes: 'Classes 08-09',
          subtopics: [
            'Euclidean algorithms',
            'Sieve of eratosthenes',
            'Puzzle problems',
            'Bitwise operators',
            'Advantages & cost-effectiveness',
            'Backtracking with Bitmasking',
            'Interview problems'
          ]
        },
        {
          title: 'Strings',
          classes: 'Classes 10-11',
          subtopics: [
            'Intro to Strings in JS',
            'Formatting and processing String',
            'Mutability and Behavior',
            'String operations',
            'String Manipulation'
          ]
        },
        {
          title: 'Space and Time complexity analysis',
          classes: 'Classes 12-13',
          subtopics: [
            'Best case, worst case and average case',
            'Sandwich theorem, recurrence relation',
            'Solving Complex Linear Recurrences',
            'Solving Divide & Conquer Recurrences',
            'Theta, Big-oh, Omega notations',
            'Understanding complexity of loops',
            'Auxiliary vs Total Space',
            'Static & Dynamic Memory Allocation'
          ]
        },
        {
          title: 'Recursion & Backtracking',
          classes: 'Classes 14-16',
          subtopics: [
            'Recursion - what, why, when?',
            'Control flow & stack trace',
            'Understanding Recursive Tree',
            'Merge sort & Quick sort',
            'Interview problems on Recursion',
            'Backtracking-Sudoku solver, N-Queens, lexo-permute'
          ]
        },
        {
          title: 'Object Oriented Programming',
          classes: 'Classes 17-18',
          subtopics: [
            'Classes & Objects',
            'Constructors, States & Behaviors',
            'this keyword',
            'Abstraction, Inheritance, Polymorphism, Encapsulation',
            'Static & non-static',
            'Class Methods'
          ]
        }
      ]
    },
    {
      title: 'Data Structure & Algorithms',
      classes: 'Classes 20-40',
      topics: [
        {
          title: 'Stacks & Queues',
          classes: 'Classes 19-20',
          subtopics: [
            'Stack as an Abstract Data Type',
            'Operations in Stack',
            'Push efficient & Pop efficient Stacks',
            'Queue as generic collection',
            'Operations in Queue',
            'Queue using 2 stacks',
            'Interview problems on Stack & Queue'
          ]
        },
        {
          title: 'LinkedList',
          classes: 'Classes 21-22',
          subtopics: [
            'Intro to LinkedList',
            'Implementation of LinkedList',
            'Operations in LinkedList',
            'Cycle detection Algorithms',
            'Problems based on LinkedList'
          ]
        },
        {
          title: 'Binary Trees',
          classes: 'Classes 23-24',
          subtopics: [
            'Implementation of Binary Trees',
            'Tree traversal- inorder, preorder, postorder',
            'Searching Algorithms- DFS, BFS',
            'Calculate- hieght, depth, diameter of tree',
            'Implementation of Binary Search Tree',
            'AVL Trees & Rotations',
            'Interview problems on BT & BST'
          ]
        },
        {
          title: 'Heap & Dictionary',
          classes: 'Classes 25-26',
          subtopics: [
            'Implementation of Heaps',
            'HeapSort with complexity analysis',
            'Concept of Hashing',
            'Dictionary implementation',
            'Problems on Dictionary & Heaps'
          ]
        },
        {
          title: 'Graph',
          classes: 'Classes 27-28',
          subtopics: [
            'Terminologies in Graph',
            'EdgeList implementation',
            'AdjacencyList implementation',
            'AdjacencyMap implementation',
            'Searching Algorithms- DFS, BFS',
            'Connected component, Cycle detection',
            "Kruskal's, Dijkstra's, Prim's Algorithms"
          ]
        },
        {
          title: 'Dynamic Programming',
          classes: 'Classes 29-30',
          subtopics: [
            'Understanding the concept in Dynamic Programming',
            'Understanding overlapping subproblems',
            'Memoization vs Tabulation',
            'Top down & bottom-up approach',
            '0-1 KnapSack problem',
            'Wildcard pattern problem',
            'Egg drop problem',
            'Matrix chain multiplication'
          ]
        }
      ]
    }
  ],
  slides: [
    {
      heading: '',
      subheading: '',
      image: '/static/swipes/web.png'
    }
  ],
  tags: [
    'DS Algo',
    'Recursion',
    'Backtracking',
    'Stack',
    'Queue',
    'Dynamic Programming',
    'Sets',
    'Problem Solving',
    'Bit Masking',
    'Interview Prep'
  ],
  overview: [
    'Every student has in their mind that why to study Data Structure. How it helps them in a real-life problem? Data Structures are the most important skills for a person belonging to the computer-science background to understand the nature of problems, develop the logic to solve a problem in an optimized way with the efficient use of appropriate Data Structures.',
    'From Competitive programming to development, the first step on the success ladder will be to master in Data Structures & Algorithms. To solve any real-life problem, we use an algorithm, but is that algorithm is the most optimized and efficient one? Today, every company believes that a person with strong DSA skills would be a perfect candidate to hire!'
  ],
  faqs: [
    {
      title: 'Will this help me with my career path?',
      answer:
        'Yes. If you learn well, all that the course intends to teach, you’ll be able to impress quite a few interviewers across quite a few fine companies.'
    },
    {
      title: 'How your doubts will get resolved?',
      answer:
        'We have an army of TA’s who are available in different time slots to resolve all your doubts. You can also interact with faculty through Slack.'
    },
    {
      title: 'Is this course suitable for me?',
      answer:
        'Definitely! If you want to shift to software developer career path, then this course is perfect for you!'
    }
  ]
};
