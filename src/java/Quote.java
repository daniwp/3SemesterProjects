
import java.time.Clock;
import java.time.ZonedDateTime;

public class Quote {

    private String text;
    private int hour;

    public Quote() {

    }

    public Quote(String text, int hour) {
        this.text = text;
        this.hour = hour;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getHour() {
        return hour;
    }

    public void setHour(int hour) {
        this.hour = hour;
    }
}
