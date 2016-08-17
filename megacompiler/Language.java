package megacompiler;

public class Language {
    String name;
    String compiler;
    int langNum;
    public Language(String langstr) {
        if (langstr.equals("C")) {
            name = "C";
            compiler = "gcc";
            langNum = 0;
        } else if (langstr.equals("C++")) {
            name = "C++";
            compiler = "g++";
            langNum = 1;
        } else if (langstr.equals("Objective-C")) {
            name = "Objective-C";
            compiler = "gcc";
            langNum = 2;
        } else if (langstr.equals("C#")) {
            name = "C#";
            compiler = "mcs";
            langNum = 3;
        } else if (langstr.equals("Java")) {
            name = "Java";
            compiler = "javac";
            langNum = 4;
        } else if (langstr.equals("Assembly")) {
            name = "Assembly";
            compiler = "nasm";
            langNum = 5;
        } else if (langstr.equals("Swift")) {
            name = "Swift";
            compiler = "swiftc";
            langNum = 6;
        } else {
            System.err.println("ERROR: Incorrect Language?");
        }
    }
    public String getName() {
        return name;
    }
    public String getCompiler() {
        return compiler;
    }
    public int getNumber() {
        return langNum;
    }
}
