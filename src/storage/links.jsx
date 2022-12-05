export async function getLinksSaved(key) {
    const links = localStorage.getItem(key)
  
    const linksSaved = JSON.parse(links) || []
  
    return linksSaved
  }
  
  export async function saveLink(key, newLink) {
    const linksInStorage = await getLinksSaved(key)
  
    const hasSameLink = linksInStorage.some(link => link.id === newLink.id)
  
    if(hasSameLink) {
      return
    }
  
    linksInStorage.push(newLink)
  
    localStorage.setItem(key, JSON.stringify(linksInStorage))
  }
  
  export async function deleteLink(key, linkId) {
    const linksInStorage = await getLinksSaved(key)
  
    const newLinks = linksInStorage.filter(item => item.id !== linkId)
  
    localStorage.setItem(key, JSON.stringify(newLinks))
  
    return newLinks
  }