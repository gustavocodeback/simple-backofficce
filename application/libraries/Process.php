<?php defined('BASEPATH') or exit('No direct script access allowed');



/* An easy way to keep in track of external processes.
* Ever wanted to execute a process in php, but you still wanted to have somewhat controll of the process ? Well.. This is a way of doing it.
* @compability: Linux only. (Windows does not work).
* @author: Peec
*/
class Process {

    // pid do processo
    private $pid;

    // comando rodado
    private $command;

    /**
     * __construct
     * 
     * método construtor
     * 
     */
    public function __construct( $cl = false ){
        if ($cl != false){
            $this->command = $cl;
            $this->runCom();
        }
    }

    /**
     * runCom
     * 
     * roda um comando
     *
     * @return void
     */
    private function runCom(){
        $command = 'nohup '.$this->command.' > /dev/null 2>&1 & echo $!';
        exec($command ,$op);
        $this->pid = (int)$op[0];
    }

    /**
     * setPid
     *
     * seta o pid do processo
     * 
     * @param [type] $pid
     * @return void
     */
    public function setPid($pid){
        $this->pid = $pid;
    }

    /**
     * getPid
     *
     * volta o pid do processo
     * 
     * @return void
     */
    public function getPid(){
        return $this->pid;
    }

    /**
     * status
     *
     * volta o status do processo
     * 
     * @return void
     */
    public function status(){
        $command = 'ps -p '.$this->pid;
        exec($command,$op);
        if (!isset($op[1]))return false;
        else return true;
    }

    /**
     * start
     *
     * inicia o processo
     * 
     * @return void
     */
    public function start(){
        if ($this->command != '')$this->runCom();
        else return true;
    }

    /**
     * stop
     * 
     * para o processo
     *
     * @return void
     */
    public function stop(){
        $command = 'kill '.$this->pid;
        exec( $command );
        return ( $this->status() == false );
    }
}

/* end of file */