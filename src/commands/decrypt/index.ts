import password from '@inquirer/password'
import { Command, Flags } from '@oclif/core'
import { SymbolNodePrivatekeys } from 'simple-symbol-node-cert'

export default class Decrypt extends Command {
  static description = 'privatekeys.yamlの秘密鍵を復号化します。'

  static examples = [`<%= config.bin %> <%= command.id %> -i "privatekeys.yaml" -o "plain_privatekeys.yaml"`]

  static flags = {
    inPrivatekeys: Flags.string({
      char: 'i',
      default: 'privatekeys.yaml',
      description: '入力privatekeys.yaml',
      required: false,
    }),
    outPrivatekeys: Flags.string({
      char: 'o',
      description: '出力privatekeys.yaml',
      required: true,
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(Decrypt)
    const passwd = await password({ mask: true, message: 'enter password:' })
    const snpk = new SymbolNodePrivatekeys()
    snpk.decrypt(flags.inPrivatekeys, flags.outPrivatekeys, passwd)
  }
}
