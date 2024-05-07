import java.io.IOException;
import java.io.OutputStream;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

public class SimpleHttpServer {
    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new java.net.InetSocketAddress(8000), 0);
        server.createContext("/frage", new FrageHandler());
        server.setExecutor(null); // Standard-Executor verwenden
        server.start();
        System.out.println("Server gestartet...");
    }

    static class FrageHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange t) throws IOException {
            // Verarbeite die Anfrage
            String response = "";
            if (t.getRequestMethod().equalsIgnoreCase("GET")) {
                // Verarbeite nur GET-Anfragen
                response = "Willst du mit mir raus? (Ja/Nein)";
            }

            t.sendResponseHeaders(200, response.length());
            OutputStream os = t.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }
}
