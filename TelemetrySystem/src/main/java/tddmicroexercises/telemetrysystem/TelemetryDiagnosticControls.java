package tddmicroexercises.telemetrysystem;

public class TelemetryDiagnosticControls
{
    private final String DiagnosticChannelConnectionString = "*111#";

    public ConnectManager connectManager;
    public TelemetryConnectReceiver telemetryConnectReceiver;
    public TelemetrySender telemetrySender;
    private final TelemetryClient telemetryClient;
    private String diagnosticInfo = "";

        public TelemetryDiagnosticControls()
        {
            telemetryClient = new TelemetryClient();
        }
        
        public String getDiagnosticInfo(){
            return diagnosticInfo;
        }
        
        public void setDiagnosticInfo(String diagnosticInfo){
            this.diagnosticInfo = diagnosticInfo;
        }
 
        public void checkTransmission() throws Exception
        {
            diagnosticInfo = "";

            telemetryClient.disconnect();
    
            int retryLeft = 3;
            while (!connectManager.getOnlineStatus() && retryLeft > 0)
            {
                connectManager.connect(DiagnosticChannelConnectionString);
                retryLeft -= 1;
            }
             
            if(!connectManager.getOnlineStatus())
            {
                throw new Exception("Unable to connect.");
            }
    
            telemetryClient.send(TelemetryClient.DIAGNOSTIC_MESSAGE);
            diagnosticInfo = telemetryConnectReceiver.receive();
    }
}
