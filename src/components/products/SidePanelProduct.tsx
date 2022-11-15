import { Panel } from 'primereact/panel'
import { ScrollPanel } from 'primereact/scrollpanel'
import React from 'react'

export const SidePanelProduct = () => {
  return (
    <Panel header='NUEVO PRODUCTO' style={{ flex: '1' }}>
        <ScrollPanel style={{ width: '100%', height: '200px' }}>
            <div style={{ padding: '1em', lineHeight: '1.5' }}>
                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughters wedding. His beloved
                son Michael has just come home from the war, but does not intend to become part of his fathes business. Through
                Michas life the nature of the family business becomes clear. The business of the family is just like the head
                of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands
                against the good of the family.
                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughte wedding. His beloved
                son Michael has just come home from the war, but does not intend to become part of his fathes business. Through Michael
                life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind
                and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the
                family.
        </div>
        </ScrollPanel>
    </Panel>
  )
}
