**gitSequencia básica Git** 

- Instalar o Git em sua maquina :

 https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git



- Comados básicos via terminal 

  - Identificar versão do Git : **git --version**

  

- Ativar repositório via terminal

  - Ir até o diretório de trabalho onde esta os arquivos / estrutura a ser incluida no Git
  - **git init** 
  - **git add** *   
  - **git commit -m  "colocar messagem que esclareca o comit"**   
  - **git status**    

- Levar para oGitHub

  - confirmar se user e email do Git e Git hub são iguais
    
  - verificar conta no git :  **git config --list**
    
  - criar repositório no GitHub

  - copiar URL do repositório criada

  - Executar no terminal

    - **git status**

    - **git remote add origin** *urlcopiada*

    - **git remote -v**

    - **git push origin master**

      

- Trazer do Github

  - **git pull origin master**
  
    

- Mover / Remover 

  **git rm file**

  **git rm diretório -r**

  **git mv nome atual nome novo**

  

- Remover o git de um diretório

  **rm -rf .git**

- Clonar Repositorio

  **git clone** 


**Conceitos Gerais do GIT**

 

Git utiliza um algorismo de encriptação chamado SHA1 que é uma função de dispersão criptográfica, desta forma, ele encapsula cada estrutura hierarquica do Git, no caso:

1. Os Blobs (que seria os arquivos);
2. As Trees (que seria os diretórios onde estão os arquivos (blobs) rastreados pelo Git);
3. E os Commites que possui informações especifica sobre o autor, timestamp, mensagem, e sobre a estrutura de blobs e trees (que são um rótulo a toda a estrutura modificada (diretórios/arquivos)).
4. 



**Limpar do chache arquivos deletados**

```
git add -u
```

```
git commit -m "note"
```





#### Como remover um arquivo grande confirmado incorretamente

```
git filter-branch  --tree-filter  'rm -rf caminho / para / seu / arquivo' HEAD git push
```



Grupo de estudo/videos_tutoriais/_media/2_Carregando_Bootstrap.mp4

Grupo de estudo/videos_tutoriais/_media/3_Estrutura_bootstrap.mp4

git filter-branch  --tree-filter  'rm -rf caminho / para / seu / arquivo' HEAD 



/Users/fabiojosepereiralima/Documents/OneDrive/Fabiojpl/DaybyDay/Atividades/20_SENAI\ Vila\ Mariana/SENAI\ -\ Full\ Stack/Aulas_SENAI/Grupo\ de\ estudo

git filter-branch  --tree-filter  'rm -rf /Users/fabiojosepereiralima/Documents/OneDrive/Fabiojpl/DaybyDay/Atividades/20_SENAI\ Vila\ Mariana/SENAI\ -\ Full\ Stack/Aulas_SENAI/Grupo de estudo/videos_tutoriais/_media/' HEAD
