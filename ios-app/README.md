# AgroHive Satellite iOS App

Aplicativo iOS nativo para monitoramento satelital baseado no sistema web existente.

## 🚀 Instalação

### Pré-requisitos
- Xcode 14.0 ou superior
- iOS 13.0 ou superior
- Node.js 16+ (para desenvolvimento)

### Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
cd ios-app
npm install
```

3. Instale pods para iOS:
```bash
cd ios
pod install
```

4. Abra o projeto no Xcode:
```bash
open ios/AgroHiveSatellite.xcworkspace
```

## 📱 Funcionalidades

- **Monitoramento Satelital** - Visualização de imagens de satélite
- **Análise Climática** - Dados de temperatura, umidade, UV
- **Previsões Agrícolas** - Análise preditiva para plantio
- **Localização GPS** - Dados baseados na localização atual
- **Notificações Push** - Alertas de condições climáticas

## 🎯 Telas Implementadas

1. **Home** - Menu principal com acesso rápido
2. **Dashboard** - Visão geral dos dados
3. **Satellite Vision** - Interface moderna com imagens
4. **Satellite Enhanced** - Análise detalhada
5. **Settings** - Configurações do app

## 🛠️ Tecnologias

- **React Native** 0.72.6
- **TypeScript** 4.8.4
- **React Navigation** 6.x
- **React Native Maps** para visualização geográfica
- **Axios** para requisições HTTP
- **AsyncStorage** para armazenamento local

## 📦 Estrutura do Projeto

```
ios-app/
├── src/
│   ├── components/
│   │   ├── SatelliteMap.tsx
│   │   ├── WeatherCard.tsx
│   │   └── UVIndexWidget.tsx
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── DashboardScreen.tsx
│   │   ├── SatelliteScreen.tsx
│   │   └── SettingsScreen.tsx
│   ├── services/
│   │   ├── api.ts
│   │   └── location.ts
│   └── assets/
│       └── logo/
├── ios/
└── android/
```

## 🚀 Executar

### iOS
```bash
npm run ios
```

### Android
```bash
npm run android
```

## 📋 Configuração de API

Configure as seguintes variáveis de ambiente:

```bash
# API Keys
RAPID_API_KEY=your_rapid_api_key
API_BASE_URL=http://localhost:8000/api
```

## 📱 Screenshots

[Adicionar screenshots quando disponíveis]
