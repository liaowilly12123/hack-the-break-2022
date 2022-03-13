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











    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    //   {
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   options: [
    //     "Option 1",
    //     "option 2",
    //     "option 3",
    //     "option 4"
    //   ]
    // },
];