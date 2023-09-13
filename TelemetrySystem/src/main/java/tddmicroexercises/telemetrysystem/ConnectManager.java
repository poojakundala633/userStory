package tddmicroexercises.telemetrysystem;

public interface ConnectManager {
        boolean getOnlineStatus();
        void connect(String telemetryServerConnectionString);
        void disconnect();
    }
