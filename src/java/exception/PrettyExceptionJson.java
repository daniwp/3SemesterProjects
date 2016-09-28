package exception;

public class PrettyExceptionJson {
    
    private int code;
    private String message;

    public PrettyExceptionJson(int status, String msg) {
        this.code = status;
        this.message = msg;
    }
}
