module.exports = () => `{
  "compilerOptions": {
    "target": "esnext",
    "module": "CommonJS",
    "allowJs": true,
    "importHelpers": true,
    "jsx": "react",
    "sourceMap": true,
    "strict": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "outDir":"./_tmp/",
    "typeRoots": [
      "./node_modules/@types",
      "./types"
    ],
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@c/*": ["src/components/*"],
      "@l/*": ["src/layout/*"],
      "@p/*": ["src/pages/*"]
    }
  },
  "exclude": [
    "./node_modules/",
    "./dist/"
  ],
  "include": [
    "./types",
    "./src"
  ]
}`