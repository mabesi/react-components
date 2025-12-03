# MABESI AZUKI NFT DAPP

A frontend Web3 App for the [Mabesi Azuki NFT Collection](https://github.com/mabesi/azuki-nft) Smart Contract.

## :speech_balloon: Description

This DApp is a frontend built with Next.js, React and Tailwind CSS to serve as a user interface for mint NFTs in a Smart Contract that implements the [ERC-721A](https://www.erc721a.org) standard, Azuki's NFT standard, that supports minting multiple tokens for close to the cost of one.



<table>
    <tr>
        <td colspan='2'>
            <kbd>
                <img src="./assets/mabesi-azuki-nft-home.jpg" />
            </kbd>
        </td>
    </tr>
    <tr>
        <td>
            <img src="./assets/mabesi-azuki-nft-mint.jpg" />
        </td>
        <td>
            <img src="./assets/mabesi-azuki-nft-opensea.jpg" />
        </td>
    </tr>
<table>

## Table of contents

- [Features](#features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [Building](#building)
- [Back Matter](#back-matter)
  - [Acknowledgements](#acknowledgements)
  - [See Also](#see-also)
  - [Contributing](#contributing)
  - [Authors & Contributors](#authors-&-contributors)
  - [Legal Disclaimer](#legal-disclaimer)
  - [License](#license)

## Features

These are the key features of the Dapp:

- Web3 Login: login using your MetaMask wallet
- Mint NFTs: mint one or more NFTs through the form
- See in Opensea: view minted NFTs directly on the Opensea website

## Built With

- Node.js
- Next.js
- React
- Ethers.js
- TypeScript
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js ^16.8.0
- An ERC-721A NFT deployed smart contract address

### Installation

Clone the repository on your local machine and enter the project folder:

```bash
$ git clone git@github.com:mabesi/dapp-nft.git
$ cd dapp-nft
```
Install the dependencies using npm:

```bash
$ npm install
```

Or yarn:

```bash
$ yarn install
```

### Configuration

Clone the `.env.example` file into a new `.env` file and adjust the values as described below, according to your environment. Follow the example values:

```bash
#CONTRACT_ADDRESS=0x55E22399a11B33ae50408eC4d564652c395DB7e7
CONTRACT_ADDRESS=

#NFT_PRICE=0.01
NFT_PRICE=

#OPENSEA_URL=https://testnets.opensea.io
OPENSEA_URL=

#CHAIN_ID=43113
CHAIN_ID=
```

### Usage

After deploy your smart contract and adjust the environment, run the development server:

```bash
$ npm run dev
```
Or
```bash
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building

Run the build command, like this:

```bash
$ npm run build
```

## Back Matter

### Acknowledgements

Thanks to all these amazing people and tools that served as a source of knowledge or were an integral part in the construction of this project.

- [Node.js](https://nodejs.org/) - JavaScript Runtime Environment
- [React](https://react.dev/) - Web Interface Library
- [Next.js](https://nextjs.org/) - React Framework
- [Ethers.js](https://ethers.org/) - Web3 Library
- [TypeScript](https://www.typescriptlang.org/) - Typed Programming Language
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Creative Tim](https://www.creative-tim.com/) - UI Tools
- [LuizTools](https://www.luiztools.com.br/) - JavaScript and Web3 Online Courses

### See Also

Enjoy these similar projects that can help you as a way of learning or as a basis for creating a larger project.

- [Basic Token ERC-20](https://github.com/mabesi/solidity-coin-erc20)
- [Basic Token BEP-20](https://github.com/mabesi/solidity-coin-bep20)
- [Basic NFT ERC-721](https://github.com/mabesi/solidity-nft-erc721)
- [Basic Azuki NFT ERC-721A](https://github.com/mabesi/azuki-nft)
- [Basic Multi Token ERC-1155](https://github.com/mabesi/solidity-multitoken-erc1155)

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
<p align="justify">It is also the end user's responsibility to know and obey all applicable local, state and federal laws. Developers take no responsibility and are not liable for any misuse or damage caused by this program.</p>

### License

This project is licensed under the [MIT License](LICENSE.md).
