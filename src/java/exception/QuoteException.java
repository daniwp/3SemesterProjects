package exception;

public class QuoteException extends Exception {
    
    private int code;

    public QuoteException(int code, String message) {
        super(message);
        this.code = code;
    }

    public int getCode() {
        return code;
    }
}
