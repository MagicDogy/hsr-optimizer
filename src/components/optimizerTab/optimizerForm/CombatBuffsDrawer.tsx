import { Drawer, Flex, Form, Typography } from 'antd'
import { useMemo } from 'react'
import { defaultGap } from 'lib/constantsUi'
import { optimizerTabDefaultGap } from 'components/optimizerTab/optimizerTabConstants'
import InputNumberStyled from 'components/optimizerTab/optimizerForm/InputNumberStyled'
import { CombatBuffs } from 'lib/constants'
import { useTranslation } from 'react-i18next'

const { Text } = Typography

export const CombatBuffsDrawer = () => {
  const { t } = useTranslation('optimizerTab', { keyPrefix: 'CombatBuffs' })
  const combatBuffsDrawerOpen = window.store((s) => s.combatBuffsDrawerOpen)
  const setCombatBuffsDrawerOpen = window.store((s) => s.setCombatBuffsDrawerOpen)

  const combatBuffsList = useMemo(() => {
    return Object.values(CombatBuffs).map((x) => (
      <CombatBuff title={t(`${x.key}`)} name={x.key} key={x.key}/>
    ))
  }, [t])

  return (
    <Drawer
      title={t('Title')}// 'Extra combat buffs'
      placement='right'
      onClose={() => setCombatBuffsDrawerOpen(false)}
      open={combatBuffsDrawerOpen}
      width={300}
      forceRender
    >
      <Flex vertical gap={defaultGap}>
        <Flex vertical gap={optimizerTabDefaultGap}>
          {combatBuffsList}
        </Flex>
      </Flex>
    </Drawer>
  )
}

function CombatBuff(props: { title: string; name: string }) {
  return (
    <Flex justify='space-between'>
      <Text>
        {props.title}
      </Text>
      <Form.Item name={['combatBuffs', props.name]}>
        <InputNumberStyled size='small' controls={false}/>
      </Form.Item>
    </Flex>
  )
}
