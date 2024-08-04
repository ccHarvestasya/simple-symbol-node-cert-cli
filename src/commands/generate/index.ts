import password from '@inquirer/password'
import { Command, Flags } from '@oclif/core'
import { SimpleSymbolNodeCert } from 'simple-symbol-node-cert'

export default class Generate extends Command {
  static description = 'Symbolノード証明書を作成します。'

  static examples = [`<%= config.bin %> <%= command.id %> --caname "Test CA" --nodename "Test Node"`]

  static flags = {
    cadays: Flags.integer({
      default: 7300,
      description: 'CA証明書有効日数',
      required: false,
    }),
    caname: Flags.string({
      default: 'Simple Symbol CA',
      description: 'CA名',
      required: false,
    }),
    certdir: Flags.string({
      default: './cert',
      description: '証明書出力ディレクトリパス',
      required: false,
    }),
    force: Flags.boolean({
      default: false,
      description: '証明書上書生成',
      required: false,
    }),
    nodedays: Flags.integer({
      default: 375,
      description: 'Node証明書有効日数',
      required: false,
    }),
    nodename: Flags.string({
      default: 'Simple Symbol Node',
      description: 'Node名',
      required: false,
    }),
    privatekeys: Flags.string({
      default: './privatekeys.yaml',
      description: '暗号化した秘密鍵を保存するファイルパス',
      required: false,
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(Generate)
    const passwd = await password({ mask: true, message: 'enter password:' })
    const ssnc = new SimpleSymbolNodeCert()
    ssnc.generate(
      flags.certdir,
      flags.caname,
      flags.nodename,
      flags.cadays,
      flags.nodedays,
      flags.force,
      flags.privatekeys,
      passwd
    )
  }
}
