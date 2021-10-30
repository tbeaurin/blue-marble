import React from "react";

const Missio = () => {

  React.useEffect(() => {
    document.querySelector(`#fontStatic`).classList.add("zoomed");
    document.querySelector(`#fontMissio`).classList.add("zoomed");
    document.querySelector(`#fontZones`).classList.add("zoomedMissio");
    document.querySelector(`#fontInventaire`).classList.add("zoomedMissio");
    document.querySelector(`#fontCoulisses`).classList.add("zoomedMissio");

    document.querySelector(`#fontMissio`).classList.remove("zoomedZones");
    document.querySelector(`#fontMissio`).classList.remove("zoomedInventaire");
    document.querySelector(`#fontMissio`).classList.remove("zoomedCoulisses");


    const images = [...document.querySelectorAll(`.missio`)];
    images.map(image => image.classList.add("currentPage"));
    images.map(image => image.classList.remove("active"));
    images.map(image => image.classList.remove("focus"));

    // Don't display Wrapper on pages
    document.querySelector(`#missioFakeWrapper`).style.display = 'none'
    document.querySelector(`#zonesFakeWrapper`).style.display = 'none'
    document.querySelector(`#inventaireFakeWrapper`).style.display = 'none'
    document.querySelector(`#coulissesFakeWrapper`).style.display = 'none'        
  }, [])

  const handleScroll = e => {
    document.querySelector(`#missioStars`).style.top = `-${e.nativeEvent.srcElement.scrollTop / 6}px`;
    document.querySelector(`#missioDessin`).style.top = `-${e.nativeEvent.srcElement.scrollTop / 6}px`;
    document.querySelector(`#missioConstelation`).style.top = `-${e.nativeEvent.srcElement.scrollTop / 6}px`;
    document.querySelector(`#stars`).style.top = `-${e.nativeEvent.srcElement.scrollTop / 18}px`;
  }

  return (
    <div id="missio">
      <h2>MISSIO</h2>
      <p className="content" style={{padding: 200 }} onScroll={e => handleScroll(e) }>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac lorem vel neque volutpat feugiat. Integer et odio a enim ultricies consectetur. Proin vel nisi quis elit sagittis vulputate. Cras consectetur lectus libero, sed molestie ipsum laoreet non. Donec nec arcu est. Suspendisse maximus est ante, quis sodales neque fermentum ac. In sed quam quis risus tempus facilisis.

Sed porttitor tellus sit amet sapien aliquam, eu faucibus ex sagittis. Cras egestas luctus commodo. Etiam nec pretium augue, hendrerit congue augue. Donec vehicula non lacus vitae tristique. Praesent non malesuada est. Aenean vel sagittis quam, quis lacinia nibh. Mauris a molestie nisi. Etiam vitae nibh vitae urna tempus sollicitudin. Duis venenatis tempor urna, eget ultrices justo condimentum sed. Praesent vitae ullamcorper est. Nam nec malesuada quam. Integer ultricies risus in feugiat imperdiet. Cras cursus nibh vel ultricies mattis.

Nunc sagittis urna lorem, id sodales leo aliquam at. In vitae sem est. Etiam ultrices dapibus mauris sit amet euismod. Etiam consectetur eleifend enim, vel gravida magna luctus congue. Nullam dignissim sed lorem nec placerat. Aliquam sit amet elit ut nulla posuere tempor. Pellentesque convallis vel enim eget dictum. Curabitur lobortis quam in lacus tincidunt, vel dignissim augue blandit. Nunc condimentum ligula id nisi gravida, in elementum eros finibus. Nulla consectetur felis sit amet felis varius faucibus iaculis ullamcorper orci. Cras facilisis tellus quis justo fermentum interdum.

Duis eu justo dolor. Phasellus ac ex imperdiet, fermentum arcu viverra, finibus magna. Curabitur sit amet mauris et diam tempor posuere in eget dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas sed mauris in libero pharetra lobortis. In vulputate est ut quam semper, vitae pharetra magna convallis. In ac pulvinar turpis. Fusce ut metus hendrerit, malesuada lacus et, ultricies tellus. Curabitur et metus nunc. Vivamus iaculis porta lorem vitae auctor. Nulla eu metus nec justo cursus dictum. Fusce malesuada semper tempus. Ut gravida nec enim in consequat. Etiam varius sit amet justo ut vehicula.

Donec suscipit ac purus in facilisis. Suspendisse vitae dolor dictum, iaculis erat ut, sodales sapien. Mauris tempus porttitor erat sit amet vestibulum. Morbi vel pharetra nulla. Vestibulum blandit nec sapien ac efficitur. Aenean ante nulla, placerat ac neque a, porttitor feugiat nunc. Donec eros mi, faucibus in tellus vel, laoreet efficitur dolor. In in mi non tortor consequat accumsan. Donec fringilla, mi a elementum volutpat, sapien libero luctus augue, ut malesuada ex ex vel justo. Morbi eu risus et sapien condimentum ultrices id sed quam. Nullam ultrices nulla nec ex rhoncus viverra. Morbi faucibus ligula in molestie congue.

Pellentesque ut pharetra tellus. Praesent ut sapien ex. Fusce ac lorem sit amet nibh egestas tincidunt. Pellentesque viverra facilisis magna at mattis. Sed sit amet tortor et nisl sodales ultrices a a ex. Integer dapibus sollicitudin quam, vitae laoreet metus egestas ultrices. Vivamus ac tortor ut arcu auctor pellentesque in in tellus. Sed vestibulum arcu nec pretium sollicitudin. Mauris ac felis vitae lorem pretium consectetur. Phasellus viverra tellus a sapien tincidunt sollicitudin. In efficitur bibendum sollicitudin. Fusce aliquam nisi ac gravida elementum. Integer viverra laoreet dui, non elementum eros vehicula a. Etiam at placerat elit, vel sagittis massa. Vestibulum a nunc porttitor nisi porta vulputate at a lorem.

Sed condimentum lorem non mattis elementum. Ut scelerisque dignissim purus a euismod. Donec semper justo justo, ac fringilla turpis venenatis in. Curabitur efficitur tortor at mollis viverra. Proin est enim, suscipit sed nulla vel, faucibus vehicula dolor. Curabitur eget turpis viverra, mattis arcu non, imperdiet lectus. Ut scelerisque odio sit amet urna vulputate cursus. Fusce id nibh in neque congue placerat.

Nunc congue velit vitae efficitur pulvinar. Donec condimentum mauris sit amet luctus pulvinar. Praesent rhoncus iaculis eros nec efficitur. Vestibulum lacinia sodales neque, non molestie nulla porta sit amet. Suspendisse ac varius purus, et pulvinar ante. Duis diam arcu, egestas eget odio quis, pellentesque cursus lectus. Curabitur eu feugiat nulla, eu ultrices justo. Vivamus orci risus, cursus et aliquam in, semper a urna.

In at nulla neque. Donec non mauris posuere augue gravida sollicitudin eu eget nibh. Fusce tempus purus a diam gravida fringilla. Nunc posuere ut urna tincidunt viverra. Proin egestas est id diam mollis dictum. Etiam aliquam, nisi non scelerisque porta, est nisl blandit ex, vitae auctor turpis est lobortis lorem. Nulla at arcu turpis. In id ultrices nisl, at iaculis metus. Nulla eget gravida arcu. Sed consequat hendrerit consectetur. Donec accumsan turpis lobortis velit vestibulum elementum. In lacinia magna lectus, sit amet vestibulum tortor euismod eu. Curabitur elit enim, aliquet sed arcu a, fermentum viverra sapien. In sollicitudin sem sed risus viverra, ut iaculis sem consectetur. Quisque dapibus posuere turpis ut bibendum. Praesent at tincidunt augue, quis volutpat nisi.

Etiam accumsan risus eu ante vulputate, eu semper lacus facilisis. Aenean vitae eleifend leo. Donec sed facilisis tellus. Cras aliquam eu velit a scelerisque. Nam ex elit, condimentum at nulla quis, ullamcorper dignissim dolor. Morbi dapibus eros in massa rutrum blandit. Nullam bibendum neque sed arcu convallis, ac mollis purus ullamcorper. Nulla fermentum, turpis vel dictum posuere, diam ex mollis augue, nec vestibulum tortor justo gravida turpis. In eget vulputate ex, ac pharetra sem. Vivamus ultricies, arcu non accumsan volutpat, dolor mi dignissim tortor, sed finibus elit enim id augue. Maecenas ut arcu non eros molestie tincidunt ac et lacus. Nam vitae velit vitae nulla bibendum euismod. In sit amet tempor nunc. Nam luctus ligula et sapien ultrices, ac euismod nibh molestie.

Aliquam aliquet est id ullamcorper molestie. Vivamus felis nisl, viverra a tempus non, dictum eget lorem. Ut elementum, nibh tincidunt condimentum egestas, tellus ex varius quam, ut vehicula nisi augue vel mi. Quisque eget mattis ligula. Etiam porta porta enim, posuere porta urna placerat a. Fusce vel lorem lorem. Fusce molestie commodo urna, ac dapibus elit molestie nec. Donec eget finibus diam. Proin imperdiet sem eget ligula blandit lobortis. Cras luctus mauris ut urna tincidunt, quis accumsan massa tempus. Ut convallis consectetur lacus, et viverra sem dignissim ac. Pellentesque gravida vel quam vitae hendrerit. Nullam pretium quam ante, eu cursus diam fermentum ornare. Aenean sagittis ultrices urna, eu consectetur odio semper eget. Donec sit amet volutpat urna.

Vivamus interdum sollicitudin justo, sed condimentum purus tincidunt at. Mauris lobortis libero libero, et posuere eros placerat nec. Morbi aliquam nulla tellus, in ultricies ipsum interdum eget. Curabitur efficitur ullamcorper sem, at egestas urna facilisis in. Morbi vel magna vitae sem gravida sollicitudin. Vestibulum commodo est eu viverra mollis. Donec tempus nisl vel posuere gravida. Ut velit felis, egestas quis dolor ac, iaculis convallis ante. Proin scelerisque mollis dignissim. Morbi ac pretium ex. Proin vel est arcu. Nam maximus eu ligula in venenatis. Vivamus vel ante libero. 
      </p>
    </div>
  )
}

export default Missio