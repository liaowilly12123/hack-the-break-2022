// creating an array and passing the number, questions, options, and answers
let questions1 = [{
        numb: 1,
        question: "Which of the following is a valid class name?",
        answer: "CustomerMaintApp",
        options: [
            "Customer Maintenance",
            "CustomerMaintApp",
            "Numeric#Validator",
            "2021YearEndApp"
        ]
    },
    {
        numb: 2,
        question: "Given the following code fragment, what is the range of possible values of myValue?\nvar rnd = new Random();\nvar myValue = rnd.nextInt(37);",
        answer: "An integer from 0 to 36 inclusive",
        options: [
            "An integer from 1 to 36 inclusive",
            "An integer from 0 to 37 inclusive",
            "An integer from 1 to 37 inclusive",
            "An integer from 0 to 36 inclusive"
        ]
    },
    {
        numb: 3,
        question: "What will be displayed by the following command?System.out.println(Math.pow(3, 4-2));",
        answer: "9.0",
        options: [
            "8.0",
            "9.0",
            "12.0",
            "There is a compile time error"
        ]
    },
    {
        numb: 4,
        question: "If x is an int where x = 1, what will x be after the following loop terminates?\n while (x < 100)\nx *= 2;",
        answer: "128",
        options: [
            "128",
            "2",
            "100",
            "64"
        ]
    },
    {
        numb: 5,
        question: "Which of the following option leads to the portability and security of Java?",
        answer: "Bytecode is executed by JVM",
        options: [
            "Bytecode is executed by JVM",
            "The applet makes the Java code secure and portable",
            "Use of exception handling",
            "Dynamic binding between objects"
        ]
    },

    {
        numb: 6,
        question: "Which of the following is not a Java features?",
        answer: "Use of pointers",
        options: [
            "Dynamic",
            "Architecture Neutral",
            "Use of pointers",
            "Object-oriented"
        ]
    },

    {
        numb: 7,
        question: "_____ is used to find and fix bugs in the Java programs.?",
        answer: "JDB",
        options: [
            "JVM",
            "JRE",
            "JDK",
            "JDB"
        ]
    },

    {
        numb: 8,
        question: "What does the expression float a = 35 / 0 return?",
        answer: "Infinity",
        options: [
            "0",
            "Not a Number",
            "Infinity",
            "Run time exception"
        ]
    },

    {
        numb: 9,
        question: "Which of the following for loop declaration is not valid?",
        answer: "for ( int i = 99; i >= 0; i / 9 )",
        options: [
            "for ( int i = 99; i >= 0; i / 9 )",
            "for ( int i = 7; i <= 77; i += 7 )",
            "for ( int i = 20; i >= 2; - -i )",
            "for ( int i = 2; i <= 20; i = 2* i )"
        ]
    },
    {
        numb: 10,
        question: "Which method of the Class.class is used to determine the name of a class represented by the class object as a String?;",
        answer: "getName()",
        options: [
            "getClass()",
            "intern()",
            "getName()",
            "toString()"
        ]
    },
    {
        numb: 11,
        question: " Evaluate the following Java expression, if x=3, y=5, and z=10: ++z + y - y + z + x++",
        answer: "25",
        options: [
            "24",
            "23",
            "20",
            "25"
        ]
    },
    {
        numb: 12,
        question: "What is the return type of the hashCode() method in the Object class?",
        answer: "int",
        options: [
            "Object",
            "int",
            "long",
            "void"
        ]
    },

    {
        numb: 13,
        question: "Given that str is a String, what does the following loop do?\nint j = str.lenth();\nwhile(j > 0)\n\tSystem.out.println(str.chartAt(--j));",
        answer: "it prints str out backwards",
        options: [
            "It prints str out forwards",
            "It prints str out backwards after skipping the last character",
            "It prints str out backwards",
            "It prints str out backwards but does not print the 0th character"
        ]
    },

    {
        numb: 14,
        question: "In which process, a local variable has the same name as one of the instance variables?",
        answer: "Variable Shadowing",
        options: [
            "Serialization",
            "Variable Shadowing",
            "Abstraction",
            "Multi-threading"
        ]
    },

    {
        numb: 15,
        question: "Which of the following is true about the anonymous inner class?",
        answer: "It has no class name",
        options: [
            "It has only methods",
            "Objects can't be created",
            "It has a fixed class name",
            "It has no class name"
        ]
    },

];

// creating an array and passing the number, questions, options, and answers
let questions2 = [{
        numb: 1,
        question: "Examples of company-side applications called … include order processing systems, payroll systems, and company communications networks",
        answer: "Enterprise applications",
        options: [
            "Enterprise applications",
            "Network operating systems NOS",
            "Operating apps",
            "Legacy systems"
        ]
    },
    {
        numb: 2,
        question: "… controls the flow of data, provides data security, and manages network operations",
        answer: "System software",
        options: [
            "Enterprise software",
            "System software",
            "Application software",
            "Legacy software"
        ]
    },
    {
        numb: 3,
        question: ".…is a system dev technique that produces a graphical representation of a concept or process that systems developers can analyze, test, and modify ",
        answer: "Modeling",
        options: [
            "Prototyping",
            "Rapid app dev",
            "Scum",
            "Modeling"
        ]
    },
    {
        numb: 4,
        question: "… is a system dev technique that tests system concepts and provides an opportunity to examine input, output, and user interface before final decisions are made",
        answer: "Prototyping",
        options: [
            "Prototyping",
            "Rapid app dev",
            "Scum",
            "Modeling"
        ]
    },
    {
        numb: 5,
        question: "Which is not true for SA?",
        answer: "Sponsors",
        options: [
            "Create value for an organization",
            "Encable the organization to perform work better",
            "Do things and challenge the current way that an org works",
            "Sponsors"
        ]
    },

    {
        numb: 6,
        question: "Anh is working on “How will this system work.” What SDLC phase?",
        answer: "Design",
        options: [
            "Planning",
            "Analysis",
            "Implementation",
            "Design"
        ]
    },

    {
        numb: 7,
        question: "Willy is calculating whether a system will lower costs or increase revenues. What SDLC?",
        answer: "Planning",
        options: [
            "Analysis",
            "Design",
            "Implementation",
            "Planning"
        ]
    },

    {
        numb: 8,
        question: "Kemp is dealing 1-on-1 with users and business managers (including some that have little experience with tech). He is demonstrating what SA skill?",
        answer: "Interpersonal",
        options: [
            "Business",
            "Interpersonal",
            "Ethical",
            "Analytical"
        ]
    },
    {
        numb: 9,
        question: "Minji is a SA for Laswell Consulting. She is attending a three-day intensive workshop on developing apps in php. What skill?",
        answer: "Technical",
        options: [
            "Business",
            "Personal",
            "Analytical",
            "Technical"
        ]
    },
    {
        numb: 10,
        question: "Strategic planing starts with a _____ that reflects a firm's vision, purpose, and values",
        answer: "Mission statement",
        options: [
            "Relationshipn diagram",
            "Feasibility study",
            "Performance assessment",
            "Mission statement"
        ]
    },
    {
        numb: 11,
        question: "Of the measures of feasibility, questions such as “Does management support the project?” and “Will the new system require training for users?” would help predict a system’s _______.",
        answer: "Operational feasibility",
        options: [
            "Schedule feasibility",
            "Technical feasibility ",
            "Economic feasibility",
            "Operational feasibility"
        ]
    },

    {
        numb: 12,
        question: "Projects where management has a choice in implementing them are called __________ projects.",
        answer: "Discretionary",
        options: [
            "Discretionarys",
            "Nondiscretionaryr",
            "Appended",
            "Concatenated"
        ]
    },

    {
        numb: 13,
        question: "Identify a typical example of a system requirement for the performance category",
        answer: "The student records system must produce class lists within five hours after the end of registration",
        options: [
            "The purchasing system must provide suppliers with up-to-date specifications",
            "Each input form must include date, time, product code, customer number, and quantity",
            "The manager of the sales department must approve orders that exceed a customers credit limit",
            "The student records system must produce class lists within five hours after the end of registration"
        ]
    },

    {
        numb: 14,
        question: "Which of the following is an example of a discretionary project?",
        answer: "Creating a new report for a user",
        options: [
            "Creating a new report for a user",
            "Adding a report required by a new federal law",
            "Including annual updates to payroll and tax percentages",
            "Updating quarterly changes in reporting requirements for an insurance processing system"
        ]
    },

    {
        numb: 15,
        question: "Which of the following is a typical example of a system requirement for the process category?",
        answer: "The equipment rental system must not execute new rental transactions for customers who have overdue accountst",
        options: [
            "The website must report online volume statistics every four hours and hourly during peak periods",
            "The system must be operated seven days a week, 365 days a year",
            "The equipment rental system must not execute new rental transactions for customers who have overdue accountst",
            "All transactions must have audit trails "
        ]
    },


];

// creating an array and passing the number, questions, options, and answers
let questions3 = [{
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Tag Markup Language",
            "Hyperlinks Text Mark Language",
            "Hyperlinking Text Marking Language",
            "Hyper Text Markup Language"
        ]
    },
    {
        numb: 2,
        question: "What symbol indicates a tag?",
        answer: "Angle brackets e.g.",
        options: [
            "Commas e.g. ','",
            "Curved brackets e.g. {,}",
            "Angle brackets e.g.",
            "Exclamation marks e.g. !"
        ]
    },
    {
        numb: 3,
        question: "Which of these is a genuine tag keyword?",
        answer: "Body",
        options: [
            "Bold",
            "Header",
            "Body",
            "Image"
        ]
    },
    {
        numb: 4,
        question: "What is the correct tag for a line break?",
        answer: "br /",
        options: [
            "brk /",
            "line /",
            "bk /",
            "br /"
        ]
    },
    {
        numb: 5,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Computing Style Sheet",
            "Creative Style System",
            "Cascading Style Sheet",
            "Creative Styling Sheet"
        ]
    },

    {
        numb: 6,
        question: "Where should a CSS file be referenced in a HTML file?",
        answer: "Inside the body section",
        options: [
            "Before any HTML code",
            "After all HTML code",
            "Inside the head section",
            "Inside the body section"
        ]
    },

    {
        numb: 7,
        question: "What is the correct format for aligning written content to the center of the page in CSS?",
        answer: "Text-align:center;",
        options: [
            "Text-align:center;",
            "Font-align:center;",
            "Text:align-center;",
            "Font:align-center;"
        ]
    },

    {
        numb: 8,
        question: "What is the correct format for changing the background colour of a div in CSS?",
        answer: "Background-color:red",
        options: [
            "Bg-color:red;",
            "IBackground:red;",
            "Background-colour:red;",
            "Background-color:red;"
        ]
    },
    {
        numb: 9,
        question: "Choose the correct HTML tag for the largest heading",
        answer: "<h1>",
        options: [
            "<heading>",
            "<h6>",
            "<head>",
            "<h1>"
        ]
    },
    {
        numb: 10,
        question: "Which of these tags are all <table> tags?",
        answer: "<table><tr><td>",
        options: [
            "<table><head><tfoot>",
            "<table><tr><td>",
            "<thead><body><tr>",
            "<table><tr><tt>"
        ]
    },
    {
        numb: 11,
        question: "A student is using a stylesheet to make all the paragraphs on the website green, but it's not working on index.html, even though it works on the other web pages. What could be causing the problem?",
        answer: "The student forgot to link the stylesheet to the index.html page",
        options: [
            "The student forgot to link the stylesheet to the index.html page",
            "The student accidentally misspelled 'green' in the stylesheet. ",
            "The student accidentally misspelled 'red' in the stylesheet.",
            "The student did not upload the images used in the index.html page."
        ]
    },

    {
        numb: 12,
        question: "Creative Commons license allows content creators to specify exactly the permissions and restrictions of their creation. Which is not a creative common that is use?",
        answer: "Copy-Work: Allows users to copy and paste any work that has not been claim without consequence.",
        options: [
            "Share-Alike: Users of this work must share any derivative works under the exact same license.",
            "Copy-Work: Allows users to copy and paste any work that has not been claim without consequence.",
            "Attribution: Others who use this work must give credit to the original author",
            "Non-Commercial: Others may not use this work for advertising or to make money."
        ]
    },

    {
        numb: 13,
        question: "CSS Class: An _______ that allows multiple elements in an HTML document to be styled in the same way.",
        answer: "Identifier",
        options: [
            "Identifier",
            "Apple",
            "Element",
            "Imperfection"
        ]
    },

    {
        numb: 14,
        question: "Algorithm: A precise ______ of ______for processes that can be executed by a computer.",
        answer: "Sequence, instructions",
        options: [
            "Sequence, instructions",
            "Amount, time",
            "Web, items",
            "Program, source"
        ]
    },

    {
        numb: 15,
        question: "The web developer wants to make <h3> Page </h3> text larger. Which TWO of the following would work?",
        answer: "Use CSS to set the font-size property of the h3 tag",
        options: [
            "Use <h6> instead of <h3>",
            "Use CSS to set the font-size property of the h3 tag",
            "Put the code style='larger' inside the h3 tag.",
            "Put the 'My Page' text inside the tags."
        ]
    },


];