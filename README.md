# MABESI REACT COMPONENTS

A modern, TypeScript-based React component library designed for flexibility and ease of use.

## :speech_balloon: Description

This library provides a set of reusable, high-quality React components built with modern standards. It features a powerful **DynamicForm** builder, TypeScript support, and accessible design patterns, making it easy to accelerate your application development.

<p align="center">
    <img src="./banner.png" alt="Mabesi React Components Banner" width="100%" />
</p>

## Table of contents

- [Features](#features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Building](#building)
- [Back Matter](#back-matter)
  - [Acknowledgements](#acknowledgements)
  - [Contributing](#contributing)
  - [Authors & Contributors](#authors-&-contributors)
  - [Legal Disclaimer](#legal-disclaimer)
  - [License](#license)

## Features

These are the key features of the library:

- **DynamicForm**: Generate complex forms from a simple JSON configuration
- **TypeScript First**: Full type safety and intellisense support
- **Async Validation**: Built-in support for asynchronous field validation
- **Field Dependencies**: Show/hide fields based on other field values
- **Modern Stack**: Built with React 18+, Vite, and Vitest
- **Accessible**: WCAG 2.1 compliant components

## Built With

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)

## Getting Started

### Prerequisites

- Node.js >= 18
- React >= 18

### Installation

Install the library using npm:

```bash
$ npm install @mabesi/react-components
```

Or yarn:

```bash
$ yarn add @mabesi/react-components
```

### Usage

Here is a basic example of how to use the `DynamicForm` component:

```tsx
import { DynamicForm, FormField } from '@mabesi/react-components';

const MyForm = () => {
  const fields: FormField[] = [
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      type: 'email',
      validation: [{ type: 'required', message: 'Email is required' }]
    },
    {
      id: 'password',
      name: 'password',
      label: 'Password',
      type: 'password',
      validation: [{ type: 'minLength', value: 8, message: 'Min 8 chars' }]
    }
  ];

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
  };

  return <DynamicForm fields={fields} onSubmit={handleSubmit} />;
};
```

### Building

To build the project locally:

```bash
$ npm run build
```

## Back Matter

### Acknowledgements

Thanks to all these amazing tools that make modern web development possible:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)

### Contributing

Please first ask us for the details of code of conduct. After this follow these steps of the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

### Authors & Contributors

| [<img loading="lazy" src="https://github.com/mabesi/mabesi/blob/master/octocat-mabesi.png" width=115><br><sub>Plinio Mabesi</sub>](https://github.com/mabesi) |
| :---: |

### Legal Disclaimer

<p align="justify">The use of this tool, for any purpose, will occur at your own risk, being your sole responsibility for any legal implications arising from it.</p>
<p align="justify">Developers take no responsibility and are not liable for any misuse or damage caused by this program.</p>

### License

This project is licensed under the [MIT License](LICENSE).