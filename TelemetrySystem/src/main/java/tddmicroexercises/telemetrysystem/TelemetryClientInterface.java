package tddmicroexercises.telemetrysystem;

public interface TelemetryClientInterface {
    String DIAGNOSTIC_MESSAGE = "AT#UD";
    boolean getOnlineStatus();
    void connect(String telemetryServerConnectionString);
    void disconnect();
    void send(String message);
    String receive();

}