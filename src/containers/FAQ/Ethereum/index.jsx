import React from 'react'

import { Link } from 'react-router-dom'
import { Translate } from 'react-redux-i18n'

import FAQItem from '../FAQItem'

import styles from '../common.css'

const Ethereum = () => (
  <>
    <h1 styleName="title">
      <Translate value="faqEth.title" />
    </h1>

    <div styleName="faq-list">
      <FAQItem>
        <FAQItem.Question>
          <Translate value="faqEth.questions.1.question" />
        </FAQItem.Question>
        <FAQItem.Answer>
          <Translate value="faqEth.questions.1.answer.1" dangerousHTML />
        </FAQItem.Answer>
      </FAQItem>

      <FAQItem>
        <FAQItem.Question>
          <Translate value="faqEth.questions.2.question" />
        </FAQItem.Question>
        <FAQItem.Answer>
          <p>
            <Translate value="faqEth.questions.2.answer.1" class={ styles.note } dangerousHTML />
          </p>

          <Translate value="faqEth.questions.2.answer.2" dangerousHTML />
        </FAQItem.Answer>
      </FAQItem>

      <FAQItem>
        <FAQItem.Question>
          <Translate value="faqEth.questions.3.question" />
        </FAQItem.Question>
        <FAQItem.Answer>
          <Translate value="faqEth.questions.3.answer.1" />

          <ul styleName="list">
            <li>
              <Translate value="faqEth.questions.3.answer.list.1" class={ styles.note } dangerousHTML />
            </li>
            <li>
              <Translate value="faqEth.questions.3.answer.list.2" class={ styles.note } dangerousHTML />
            </li>
          </ul>
          <br />
          <br />
          <Translate value="faqEth.questions.3.answer.2" />

          <ul styleName="list">
            <li>
              { '- ' }
              <a
                href="https://metamask.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Metamask
              </a>
              { ' — ' }
              <Link to="/how-to/metamask">
                <Translate value="common.instruction.install" />
              </Link>
            </li>
            <li>
              { '- ' }
              <a
                href="https://trustwallet.com/ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trust Wallet
              </a>
              { ' — ' }
              <Link to="/how-to/trustwallet">
                <Translate value="common.instruction.install" />
              </Link>
            </li>
            <li>
              { '- ' }
              <a
                href="https://www.myetherwallet.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MyEtherWallet
              </a>
              { ' — ' }
              <Link to="/how-to/myetherwallet">
                <Translate value="common.instruction.install" />
              </Link>
            </li>
          </ul>
        </FAQItem.Answer>
      </FAQItem>

      <FAQItem>
        <FAQItem.Question>
          <Translate value="faqEth.questions.4.question" />
        </FAQItem.Question>
        <FAQItem.Answer>
          <Translate value="faqEth.questions.4.answer.1" />
          { ' ' }
          <a
            href="https://www.bestchange.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            bestchange.ru
          </a>
          { ' '}
          <Translate value="common.and" />
          { ' ' }
          <a
            href="https://localethereum.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            localethereum.com
          </a>
          .
        </FAQItem.Answer>
      </FAQItem>

      <FAQItem>
        <FAQItem.Question>
          <Translate value="faqEth.questions.5.question" />
        </FAQItem.Question>
        <FAQItem.Answer>
          <p>
            <Translate value="faqEth.questions.5.answer.1" class={ styles.note } dangerousHTML />
          </p>

          <Translate value="faqEth.questions.5.answer.2" class={ styles.note } dangerousHTML />
        </FAQItem.Answer>
      </FAQItem>

      <FAQItem>
        <FAQItem.Question>
          <Translate value="faqEth.questions.6.question" />
        </FAQItem.Question>
        <FAQItem.Answer>
          <p>
            <Translate value="faqEth.questions.6.answer.1" />
          </p>

          <Translate value="faqEth.questions.6.answer.2" dangerousHTML />
        </FAQItem.Answer>
      </FAQItem>

      <FAQItem>
        <FAQItem.Question>
          <Translate value="faqEth.questions.7.question" />
        </FAQItem.Question>
        <FAQItem.Answer>
          <p>
            <Translate value="faqEth.questions.7.answer.1" />
          </p>

          <Translate value="faqEth.questions.7.answer.2" />
        </FAQItem.Answer>
      </FAQItem>
    </div>
  </>
)

export default Ethereum
