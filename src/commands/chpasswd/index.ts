import password from '@inquirer/password'
import { Command, Flags } from '@oclif/core'
import { SymbolNodePrivatekeys } from 'simple-symbol-node-cert'

export default class ChangePasswd extends Command {
  static description = 'privatekeys.yamlの暗号化パスワードを変更します。'

  static examples = [`<%= config.bin %> <%= command.id %> -i "privatekeys.yaml" -o "new_privatekeys.yaml"`]

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
    const { flags } = await this.parse(ChangePasswd)
    const oldPasswd = await password({ mask: true, message: 'enter old password:' })
    const newPasswd = await password({ mask: true, message: 'enter new password:' })
    await password({
      mask: true,
      message: 're-enter new password:',
      validate(value) {
        if (value === newPasswd) return true
        return false
      },
    })
    const snpk = new SymbolNodePrivatekeys()
    snpk.changePasswd(flags.inPrivatekeys, flags.outPrivatekeys, oldPasswd, newPasswd)
  }
}
