<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conversor de Pés para Metros</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="manifest" href="manifest.json">
</head>
<body>
    <header>
        <h1>Conversor de Pés para Metros</h1>
    </header>
    <main>
        <section class="converter">
            <label for="feet">Digite o valor em pés:</label>
            <input type="number" id="feet" placeholder="Digite o valor em pés">
            <button onclick="convert()">Converter</button>
            <div id="result-container">
                <p id="result"></p>
            </div>
        </section>
    </main>
    <footer>
        <p>© 2024 Conversor de Pés para Metros</p>
    </footer>
    <script src="script.js"></script>
    <script>
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js')
                .then((registration) => {
                    console.log('Service Worker registrado com sucesso:', registration);
                })
                .catch((error) => {
                    console.log('Falha ao registrar o Service Worker:', error);
                });
        }
    </script>
</body>
</html>
