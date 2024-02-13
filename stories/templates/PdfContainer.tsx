import PropTypes from 'prop-types'
import React from 'react'
import { Document, Page, PDFViewer } from '@react-pdf/renderer'

export const PdfContainer = ({ children, pageSize }) => {
  return (
    <PDFViewer
      style={{
        width: '100%',
        height: '90vh'
      }}
    >
      <Document>
        <Page
          size={pageSize ?? 'A4'}
          style={{
            margin: 20,
            paddingRight: 40
          }}
        >
          {children}
        </Page>
      </Document>
    </PDFViewer>
  )
}

PdfContainer.propTypes = {
  children: PropTypes.node,
  pageSize: PropTypes.string
}
