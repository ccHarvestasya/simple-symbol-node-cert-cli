# Simple Symbol Node Cert CLI

Symbol ノード証明書を簡単に生成

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/simple-symbol-node-cert-cli.svg)](https://npmjs.org/package/simple-symbol-node-cert-cli)
[![Downloads/week](https://img.shields.io/npm/dw/simple-symbol-node-cert-cli.svg)](https://npmjs.org/package/simple-symbol-node-cert-cli)

<!-- toc -->

- [使い方](#使い方)
- [コマンド](#コマンド)
<!-- tocstop -->

## 使い方

<!-- usage -->

```sh-session
$ npm i -g simple-symbol-node-cert-cli
$ simple-symbol-node-cert-cli generate
...
$ simple-symbol-node-cert-cli --help
...
```

<!-- usagestop -->

## コマンド

<!-- commands -->

- [`simple-symbol-node-cert-cli generate`](#simple-symbol-node-cert-cli-generate)
- [`simple-symbol-node-cert-cli renew`](#simple-symbol-node-cert-cli-renew)
- [`simple-symbol-node-cert-cli info`](#simple-symbol-node-cert-cli-info)

### `simple-symbol-node-cert-cli generate`

```plaintext
Symbolノード証明書を作成します。

USAGE
  $ simple-symbol-node-cert-cli generate [--cadays <value>] [--caname <value>] [--certdir <value>] [--force] [--nodedays <value>] [--nodename <value>] [--privatekeys <value>]

FLAGS
  --cadays=<value>       [default: 7300] CA証明書有効日数
  --caname=<value>       [default: Simple Symbol CA] CA名
  --certdir=<value>      [default: ./cert] 証明書出力ディレクトリパス
  --force                証明書上書生成
  --nodedays=<value>     [default: 375] Node証明書有効日数
  --nodename=<value>     [default: Simple Symbol Node] Node名
  --privatekeys=<value>  [default: ./privatekeys.yaml] 暗号化した秘密鍵を保存するファイルパス

DESCRIPTION
  Symbolノード証明書を作成します。

EXAMPLES
  $ simple-symbol-node-cert-cli generate --caname "Test CA" --nodename "Test Node"
  hello friend from oclif! (./src/commands/hello/index.ts)
```

`privatekeys.yaml`に入力された秘密鍵から証明書を生成します。  
ファイルが存在しなければランダムに生成します。

```yaml
main:
  privateKey: 5737DBF5B9******************************************************
transport:
  privateKey: 5E4574528E******************************************************
```

### `simple-symbol-node-cert-cli renew`

```plaintext
Symbolノード証明書を更新します。

USAGE
  $ simple-symbol-node-cert-cli renew [--cadays <value>] [--certdir <value>] [--nodedays <value>] [--privatekeys <value>]

FLAGS
  --cadays=<value>       [default: 7300] CA証明書有効日数
  --certdir=<value>      [default: ./cert] 証明書ディレクトリパス
  --nodedays=<value>     [default: 375] Node証明書有効日数
  --privatekeys=<value>  [default: ./privatekeys.yaml] 暗号化した秘密鍵を保存するファイルパス

DESCRIPTION
  Symbolノード証明書を更新します。

EXAMPLES
  $ simple-symbol-node-cert-cli renew
```

### `simple-symbol-node-cert-cli info`

```plaintext
Symbolノード証明書の情報を参照します。

USAGE
  $ simple-symbol-node-cert-cli info [--certdir <value>]

FLAGS
  --certdir=<value>  [default: ./cert] 証明書ディレクトリパス

DESCRIPTION
  Symbolノード証明書の情報を参照します。

EXAMPLES
  $ simple-symbol-node-cert-cli info
```

<!-- commandsstop -->
