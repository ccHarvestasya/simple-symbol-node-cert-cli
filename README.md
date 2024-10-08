# Simple Symbol Node Cert CLI

Symbol ノード証明書を簡単に生成

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/simple-symbol-node-cert-cli.svg)](https://npmjs.org/package/simple-symbol-node-cert-cli)
[![Downloads/week](https://img.shields.io/npm/dw/simple-symbol-node-cert-cli.svg)](https://npmjs.org/package/simple-symbol-node-cert-cli)

<!-- toc -->
* [Simple Symbol Node Cert CLI](#simple-symbol-node-cert-cli)
<!-- tocstop -->

## 使い方

<!-- usage -->
```sh-session
$ npm install -g simple-symbol-node-cert-cli
$ simple-symbol-node-cert-cli COMMAND
running command...
$ simple-symbol-node-cert-cli (--version)
simple-symbol-node-cert-cli/1.1.3 win32-x64 node-v20.16.0
$ simple-symbol-node-cert-cli --help [COMMAND]
USAGE
  $ simple-symbol-node-cert-cli COMMAND
...
```
<!-- usagestop -->

## コマンド

<!-- commands -->
* [`simple-symbol-node-cert-cli chpasswd`](#simple-symbol-node-cert-cli-chpasswd)
* [`simple-symbol-node-cert-cli decrypt`](#simple-symbol-node-cert-cli-decrypt)
* [`simple-symbol-node-cert-cli encrypt`](#simple-symbol-node-cert-cli-encrypt)
* [`simple-symbol-node-cert-cli generate`](#simple-symbol-node-cert-cli-generate)
* [`simple-symbol-node-cert-cli info`](#simple-symbol-node-cert-cli-info)
* [`simple-symbol-node-cert-cli renew`](#simple-symbol-node-cert-cli-renew)

## `simple-symbol-node-cert-cli chpasswd`

privatekeys.yamlの暗号化パスワードを変更します。

```
USAGE
  $ simple-symbol-node-cert-cli chpasswd -o <value> [-i <value>]

FLAGS
  -i, --inPrivatekeys=<value>   [default: privatekeys.yaml] 入力privatekeys.yaml
  -o, --outPrivatekeys=<value>  (required) 出力privatekeys.yaml

DESCRIPTION
  privatekeys.yamlの暗号化パスワードを変更します。

EXAMPLES
  $ simple-symbol-node-cert-cli chpasswd -i "privatekeys.yaml" -o "new_privatekeys.yaml"
```

_See code: [src/commands/chpasswd/index.ts](https://github.com/ccHarvestasya/simple-symbol-node-cert-cli/blob/v1.1.3/src/commands/chpasswd/index.ts)_

## `simple-symbol-node-cert-cli decrypt`

privatekeys.yamlの秘密鍵を復号化します。

```
USAGE
  $ simple-symbol-node-cert-cli decrypt -o <value> [-i <value>]

FLAGS
  -i, --inPrivatekeys=<value>   [default: privatekeys.yaml] 入力privatekeys.yaml
  -o, --outPrivatekeys=<value>  (required) 出力privatekeys.yaml

DESCRIPTION
  privatekeys.yamlの秘密鍵を復号化します。

EXAMPLES
  $ simple-symbol-node-cert-cli decrypt -i "privatekeys.yaml" -o "plain_privatekeys.yaml"
```

_See code: [src/commands/decrypt/index.ts](https://github.com/ccHarvestasya/simple-symbol-node-cert-cli/blob/v1.1.3/src/commands/decrypt/index.ts)_

## `simple-symbol-node-cert-cli encrypt`

privatekeys.yamlの秘密鍵を暗号化します。

```
USAGE
  $ simple-symbol-node-cert-cli encrypt -o <value> [-i <value>]

FLAGS
  -i, --inPrivatekeys=<value>   [default: privatekeys.yaml] 入力privatekeys.yaml
  -o, --outPrivatekeys=<value>  (required) 出力privatekeys.yaml

DESCRIPTION
  privatekeys.yamlの秘密鍵を暗号化します。

EXAMPLES
  $ simple-symbol-node-cert-cli encrypt -i "plain_privatekeys.yaml" -o "privatekeys.yaml"
```

_See code: [src/commands/encrypt/index.ts](https://github.com/ccHarvestasya/simple-symbol-node-cert-cli/blob/v1.1.3/src/commands/encrypt/index.ts)_

## `simple-symbol-node-cert-cli generate`

Symbolノード証明書を作成します。

```
USAGE
  $ simple-symbol-node-cert-cli generate [--cadays <value>] [--caname <value>] [--certdir <value>] [--force]
    [--nodedays <value>] [--nodename <value>] [--privatekeys <value>]

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
```

_See code: [src/commands/generate/index.ts](https://github.com/ccHarvestasya/simple-symbol-node-cert-cli/blob/v1.1.3/src/commands/generate/index.ts)_

## `simple-symbol-node-cert-cli info`

Symbolノード証明書の情報を参照します。

```
USAGE
  $ simple-symbol-node-cert-cli info [--certdir <value>] [-n <value>]

FLAGS
  -n, --networkId=<value>  [default: mainnet] ネットワークID(mainnet/testnet/any number)
      --certdir=<value>    [default: ./cert] 証明書ディレクトリパス

DESCRIPTION
  Symbolノード証明書の情報を参照します。

EXAMPLES
  $ simple-symbol-node-cert-cli info
```

_See code: [src/commands/info/index.ts](https://github.com/ccHarvestasya/simple-symbol-node-cert-cli/blob/v1.1.3/src/commands/info/index.ts)_

## `simple-symbol-node-cert-cli renew`

Symbolノード証明書を更新します。

```
USAGE
  $ simple-symbol-node-cert-cli renew [--cadays <value>] [--certdir <value>] [--nodedays <value>]
    [--privatekeys <value>]

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

_See code: [src/commands/renew/index.ts](https://github.com/ccHarvestasya/simple-symbol-node-cert-cli/blob/v1.1.3/src/commands/renew/index.ts)_
<!-- commandsstop -->
