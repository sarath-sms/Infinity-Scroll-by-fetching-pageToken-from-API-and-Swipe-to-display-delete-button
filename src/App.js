import React, { useState, useEffect } from 'react'
import MessageCard from './MessageCard'
import { Content, Loading } from './App.styles'
import { getUsers } from './API'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

function App() {
  const classes = useStyles()
  const [pageToken, setPageToken] = useState('')
  const [pageTokenStr, setPageTokenStr] = useState('')
  const [msgData, setmsgData] = useState([])
  const [loading, setLoading] = useState(true)

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget
    console.log(scrollHeight + ' ' + scrollTop + ' ' + clientHeight)
    // console.log(pageToken)
    if (scrollHeight - parseInt(scrollTop) === clientHeight) {
      setPageToken((prev) => prev + 1)
    }
  }

  useEffect(() => {
    const loadMsgData = async () => {
      setLoading(true)
      const newMessages = await getUsers(pageTokenStr)
      console.log(newMessages)
      // const newPages = String(newUsers.pageToken)
      // setPage((prev) => prev + newPages)
      setPageTokenStr(String(newMessages.pageToken))
      console.log(pageTokenStr)
      setmsgData((prev) => [...prev, ...newMessages.messages])
      setLoading(false)
    }
    loadMsgData()
  }, [pageToken])
  return (
    <div className='App'>
      <AppBar position='static' style={{ background: '#6234ee' }}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Messages
          </Typography>
        </Toolbar>
      </AppBar>
      <Content onScroll={handleScroll}>
        {msgData &&
          msgData.map((data) => (
            <>
              <MessageCard
                key={data.id}
                user={data.author.name}
                pic={'http://message-list.appspot.com' + data.author.photoUrl}
                msg={data.content}
                year={
                  Math.abs(
                    parseInt(data.updated.substring(0, 4)) -
                      new Date().getFullYear()
                  ) + ' Years ago'
                }
              />
            </>
          ))}
      </Content>
      {loading && <Loading>Loading ...</Loading>}
    </div>
  )
}

export default App
